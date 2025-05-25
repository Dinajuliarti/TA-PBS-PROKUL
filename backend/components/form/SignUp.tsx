import React from 'react'
import { z } from "zod";
// define a schema for input validation
const FormSchema = z.object({
    email: z.string().min(1,'Email is required').email("Invalid email address"),
    username: z.string().min(1,'Username is required').max(100),
    password: z.string().min(1,"Password is required").max(8,"Password have than 8 characters"),
});


function SignUp() {
    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const { email, username, password } = values;
        const res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                email,
                username,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if(res.ok) {
            const data = await res.json();
            console.log(data);
        }
    }
  return (
    <div>SignUp</div>
  )
}

export default SignUp