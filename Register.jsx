import { useForm } from "react-hook-form";


export default function Register() {
    const {
        register,
        handleSubmit,
        reset,
        formState :{errors}

    } =useForm();

    const submitForm =(data) =>{
        alert('registration successful');
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input type="text"
            placeholder="enter name "
            {...register("name",{
                required :"name is mandatory"
            })}
            /> <br/>
            {errors.name && (<p>{errors.name.message}</p>)}

            <input type="number"
            placeholder="enter age"
            {...register("age",{
                required :"age is mandatory",
                min:{
                    value: 18,
                    message :"age should be 18 at least"
                }
            })}
            /> <br/>
            {errors.age &&(<p>{errors.age.message}</p>)}

            <input type="email"
            placeholder="enter email"
            {...register("email",{
                required : "email is mandatory",
                pattern :{
                    value : /^[A-Za-z0-9]+@gmail\.com$/,
                    message :"email should be gamil address"
                }
            })}
            /> <br/>

            {errors.email && (<p>{errors.email.message}</p>)} 

            <input type="password"
            placeholder="enter password"
            {...register("password",{
                required: "password is mandotory",
                minlength :{
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