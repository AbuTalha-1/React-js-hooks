import React from "react";

const SingleFakeData = ({singleData}) => {
   const {name,username,email,phone} = singleData;
    return (
        <div className="first-one">
            <h2>
                The FirstName is : {name}
            </h2>
            <p>
                The userName is : {username}
            </p>
            <p>
                The Email is : {email}
            </p>
            <h5> The Phone Number is: {phone} </h5>
        </div>
    )
}

export default SingleFakeData