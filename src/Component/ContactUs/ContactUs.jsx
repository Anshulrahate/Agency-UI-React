import React, { useState } from 'react'
import Title from '../Title/Title'
import person_icon from "../../assets/Images/person_icon.svg"
import email_icon from "../../assets/Images/email_icon.svg"
import arrow_icon from '../../assets/Images/arrow_icon.svg'
import { toast } from 'react-hot-toast'
import { motion } from "framer-motion";
const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3_FORM_KEY
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success!");
        toast.success("Thank you! We will get back to you soon 😊");
        event.target.reset();
      } else {
        toast.error("Submission failed ❌");
      }
    } catch (error) {
      toast.error("Network error ❌");
    }
  };

  return (
    <motion.div

    initial='hidden'
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
      id='contact-us'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white'
    >
      <Title
        title="Reach us Out"
        desc="From strategy to execute your business forward"
      />

      <motion.form 
      intial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.4, delay:0.6}}
      viewport={{once:true}}
      
      onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

        <div>
          <p className='mb-2 text-sm font-medium'>Your Name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={person_icon} alt="person" />
            <input name='name' required className='w-full p-3 bg-transparent outline-none' />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Your Email</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={email_icon} alt="email" />
            <input name='email' type="email" required className='w-full p-3 bg-transparent outline-none' />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea name='message' rows={8} required className='w-full p-3 rounded-lg border bg-transparent'></textarea>
        </div>

        <button type='submit' className='flex gap-3 bg-blue-500 text-white px-10 py-3 rounded-full'>
          Submit <img src={arrow_icon} alt="" />
        </button>

      </motion.form>
    </motion.div>
  )
}

export default ContactUs
