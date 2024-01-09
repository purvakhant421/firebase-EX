import React, { useEffect, useState } from "react";
import { getData, postdata } from "../firebase/function/function";

const Form = () => {
    const [data, setdata] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
    });

    const getinput = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const submitform = (e) => {
        e.preventDefault();
        postdata(data);
        setdata({
            Name: "",
            Email: "",
            Phone: "",
            Message: "",
        });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="contact-us">
                <form onSubmit={submitform}>
                    <label htmlFor="Name">
                        NAME <em>&#x2a;</em>
                    </label>
                    <input
                        id="Name"
                        name="Name"
                        required=""
                        type="text"
                        value={data.Name}
                        onChange={getinput}
                    />
                    <label htmlFor="Email">
                        EMAIL <em>&#x2a;</em>
                    </label>
                    <input
                        id="Email"
                        name="Email"
                        required=""
                        type="email"
                        value={data.Email}
                        onChange={getinput}
                    />
                    <label htmlFor="Phone">PHONE</label>
                    <input
                        id="Phone"
                        name="Phone"
                        //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        type="tel"
                        value={data.Phone}
                        onChange={getinput}
                    />
                    <label htmlFor="Note">
                        YOUR MESSAGE <em>&#x2a;</em>
                    </label>
                    <textarea
                        id="Message"
                        name="Message"
                        required=""
                        value={data.Message}
                        onChange={getinput}
                        rows="4"></textarea>
                    <h3>
                        Please provide all the information about your.
                    </h3>
                    <button id="Order">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
