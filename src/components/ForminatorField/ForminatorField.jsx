"use client";

import { useSearchParams } from 'next/navigation'

export default function ForminatorField({wrapper}) {

    const field = wrapper.fields[0];

    const searchParams = useSearchParams();

    const reference = field.prefill ? searchParams.get(field.prefill) ?? 'Candidature spontannée' : "";

    return <div className={'form-group'}>
        <label className={'form-label'}>
            {field.field_label}{field.required && <span className="required">*</span>}
        </label>
        <div className={'form-input'}>
            {field.type === 'consent' ?
                <label className="inlined"><input type={'checkbox'} name={field.element_id} required={field.required === "1"}/> <span
                    dangerouslySetInnerHTML={{__html: field.consent_description}}></span></label>
                :
                field.type === 'textarea' ?
                    <textarea name={field.element_id} placeholder={field.placeholder} required={field.required === "1"}></textarea>
                    :
                    field.type === "upload" ?
                        <input type={'file'} name={field.element_id} required={field.required === "1"}/>
                        :
                        field.type === "select" ?
                            <select name={field.element_id} required={field.required === "1"}>
                                {field.options.map(option => <option key={option.value}
                                                                     value={option.value}>{option.label}</option>)}
                            </select>
                            :
                            field.type === "captcha" ?
                                null
                                :
                                <input 
                                    type={field.type} 
                                    name={field.element_id}
                                    placeholder={field.placeholder} 
                                    required={field.required === "1"}
                                    readOnly={field.prefill && reference ? true : false}
                                    defaultValue={field.prefill && reference ? reference === "Candidature spontannée" ? reference : 'Référence : ' + reference : ''}
                                />
            }
        </div>
    </div>
}
