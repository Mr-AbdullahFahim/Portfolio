import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

library.add(fas, far, fab);

export default function Contactus() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        description: ''
    });

    const [notification, setNotification] = useState({ show: false, success: false, message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_0vb56tn', 'contact_form', form.current, 'bbgXBtbZ18l3Lef5d')
        .then(
            () => {
                console.log('SUCCESS!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    description: ''
                });
                setNotification({show:true,success:true,message:"Email sent Successfully"});
            },
            (error) => {
                console.error('FAILED...', error);
                setNotification({show:true,success:false,message:"Email not sent"});
            }
        );
        setTimeout(() => setNotification({ show: false, success: false, message: '' }), 8000);
    };

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-1 lg:w-2/3 w-5/6 border-2 mx-auto rounded-lg bg-black bg-opacity-5 my-12">
            <div className="grid col-span-2 grid-rows-7 p-5">
                <div className="row-span-5">
                <h3 className="text-5xl font-bold text-gray-800">Reach<br />Us Today!!</h3>
                <p className="mt-5 text-justify text-gray-600"><span className="font-light">Feel free to reach out for collaboration or just a friendly chat. I'd love to hear from you!</span></p>
                </div>
                <div className="grid place-items-end row-span-2">
                <div>
                    <a href="https://wa.me/+94769462932" className="w-full flex items-center gap-2 justify-end mb-2 opacity-80 hover:opacity-100">076-946-2932<FontAwesomeIcon icon={['fab', 'whatsapp']} className="text-xl mr-1" /></a>
                    <a href="mailto:fahimabdullah528@gmail.com" className="w-full flex gap-2 items-center justify-end mb-2 opacity-80 hover:opacity-100">fahimabdullah528@gmail.com<FontAwesomeIcon icon={['fas', 'envelope']} className="text-xl mr-1" /></a>
                    <a href="https://www.linkedin.com/in/mr-abdullah" className="w-full flex gap-2 items-center justify-end mb-2 opacity-80 hover:opacity-100">www.linkedin.com/in/mr-abdullah<FontAwesomeIcon icon={['fab', 'linkedin']} className="text-xl mr-1" /></a>
                    <div className="flex gap-2 items-center justify-end mb-2 opacity-75">Kandy, Sri Lanka<FontAwesomeIcon icon={['fas', 'location-dot']} className="text-xl mr-1" /></div>
                </div>
                </div>
            </div>
            <div className="relative m-4 lg:ml-0 lg:mr-8 lg:border-l-[1px] lg:border-t-0 border-t-[1px] col-span-3 border-gray-500">
                <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 p-5 lg:mx-4 lg:mt-0 mt-4 rounded-md bg-black bg-opacity-5 w-full">
                <label htmlFor="name" className="mb-1">Name:</label>
                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required className="p-1 pl-3 rounded-lg bg-gray-900 mb-3 bg-transparent border-2 placeholder-slate-500" />
                <label htmlFor="email" className="mb-1">Email:</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter the mail" required className="p-1 pl-3 rounded-lg bg-gray-900 mb-3 bg-transparent border-2 placeholder-slate-500" />
                <label htmlFor="subject" className="mb-1">Subject:</label>
                <input id="subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter the subject" required className="p-1 pl-3 rounded-lg bg-gray-900 mb-3 bg-transparent border-2 placeholder-slate-500" />
                <label htmlFor="description" className="mb-1">Message:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Give a short description about the project" className="p-1 pl-3 rounded-lg bg-gray-900 mb-3 min-h-32 bg-transparent border-2 placeholder-slate-500" rows="5"></textarea>
                <button className="group flex items-center justify-center relative m-auto py-5 rounded-lg font-bold text-base w-full h-5 bg-[#F42A0F] text-white overflow-hidden hover:opacity-80">
                    <div className="bg-black opacity-30 w-14 h-24 blur-md absolute animate-shine group-hover:animate-none group-hover:hidden"></div>Submit
                </button>
                </form>
            </div>
            {notification.show && (<div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-7 py-[6px] rounded-2xl text-black font-medium ${notification.success?'bg-green-200':'bg-red-200'}  border-black flex justify-center items-center border-[1px]`}>
                {notification.success?<FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-xl mr-1 text-green-500" />:<FontAwesomeIcon icon="fa-solid fa-circle-xmark" className="text-xl mr-1 text-red-500" />}{notification.message}
            </div>)}
        </div>
    );
}
