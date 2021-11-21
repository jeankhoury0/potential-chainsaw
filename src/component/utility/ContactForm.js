import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xwkagdop");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="pt-4">
            <div className="grid grid-cols-2 gap-y-3">
                <Label htmlFor="name" >
                    Name
                </Label>
                <input
                    id="name"
                    type="text"
                    name="name"
                />
                <Label htmlFor="email">
                    Email Address
                </Label>
                <input
                    id="email"
                    type="email"
                    name="email"
                />
                <Label htmlFor="message">
                    Message
                </Label>
                <textarea
                    id="message"
                    name="message"
                />
                <div>
                </div>
                <div className="">
                    <button type="submit" disabled={state.submitting} className="bg-secondAccent w-1/2 py-2 mt-1 text-l font-medium rounded text-white hover:bg-grayAccent transition-colors">
                        Submit
                    </button>
                </div>
            </div>
           
            
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
           
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            
        </form>
    );
    }

function Label(props){
    return(
        
        <label htmlFor={props.htmlFor} className="text-lg text-right pr-10">
                {props.children}
            </label>

    )
}

export default ContactForm;