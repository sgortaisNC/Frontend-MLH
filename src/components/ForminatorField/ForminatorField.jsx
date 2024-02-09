export default function ForminatorField({wrapper}) {

    const field = wrapper.fields[0];

    return <div className={'form-group'}>
        <label className={'form-label'}>
            {field.field_label}
        </label>
        <div className={'form-input'}>
            {field.type === 'consent' ?
                <label><input type={'checkbox'} name={field.element_id}/> <span
                    dangerouslySetInnerHTML={{__html: field.consent_description}}></span></label>
                :
                field.type === 'textarea' ?
                    <textarea name={field.element_id} placeholder={field.placeholder}></textarea>
                    :
                    field.type === "upload" ?
                        <input type={'file'} name={field.element_id}/>
                        :
                        field.type === "select" ?
                            <select name={field.element_id}>
                                {field.options.map(option => <option key={option.value}
                                                                     value={option.value}>{option.label}</option>)}
                            </select>
                            :
                            field.type === "captcha" ?
                                null
                                :
                                <input type={field.type} name={field.element_id} placeholder={field.placeholder}/>
            }
        </div>
    </div>
}
