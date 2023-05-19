
const MyToys = () => {

    const handelMyToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
    }

    return (
        <div>
            <form onSubmit={handelMyToy}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MyToys;