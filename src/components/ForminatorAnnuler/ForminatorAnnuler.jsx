"use client";

export default function ForminatorAnnuler() {
    return <button type={'button'} onClick={() => {
        window.history.back()
    }} className={'btn btn--outline'}>Annuler</button>
}
