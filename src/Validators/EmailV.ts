export default function EmailV (EmailV: string):Boolean {
    const RegexEmail = /^[\w.%+-]+@(?:[\w-]+\.)+[a-zA-Z]{2,}$/i

    return RegexEmail.test(EmailV)
}