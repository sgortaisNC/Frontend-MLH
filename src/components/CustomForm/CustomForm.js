"use client";

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    fetch('https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/submit-form', {
        method: 'POST',
        body: data
    }).then(r => r.json()).then(r => {
        console.log(r);
    });
    return false;
}

export const CustomForm = ({formId,children}) => {
    return (
        <form className={`innerForm form-${formId}`} onSubmit={handleSubmit}>
            {children}
        </form>
    );
};
