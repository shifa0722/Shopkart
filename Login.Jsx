import { useForm } from "react-hook-form";

export default function Login() {
    const {
        register,
        handleSubmit,
        reset,
        formState :{errors}

    } =useForm();

    const submitForm =(data) =>{
        alert('login successful');
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input type="email"
            placeholder="enter email"
            {...register("email",{
                required :"email is mandatory",
                pattern :{
                    value :/^[A-Za-z0-9]+@gmail\.com$/,
                    message :"email should be gmail "
                }
            })}
            /> <br/>

            {errors.email &&(<p>{errors.email.message}</p>)}

            <input type="password"
            placeholder="enter password"
            {...register("password",{
                required :"password is mandatory",
                minLength :{
                    value :8,
                    message :"min 8 character required"
                }
            })}
            /> <br/>

            {errors.password && (<p>{errors.password.message}</p>)}

            <button type="submit">submit</button>
        </form>
  

        
    );
}