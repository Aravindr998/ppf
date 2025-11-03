const ContactMe = () => {
  return (
    <div className="w-full flex flex-col items-center text-center p-2 gap-3 mt-6">
      <img src="connection.ico" />
        <p className="text-xl font-bold">Let’s build something great together! Whether it’s a new project, collaboration, or just tech talk, feel free to reach out.</p>
        <a className="flex flex-col items-center" href="mailto:aravindr998@gmail.com">
          <img className="w-20" src="/gmail_logo.webp" />
          <p className="text-blue-400 hover:underline" >aravindr998@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/aravind-r-321b3117b/" className="flex flex-col items-center">
          <img className="w-20" src="/linkedin_logo.jpg" />
          <p className="text-blue-400 hover:underline" >Linkedin </p>
        </a>
    </div>
  )
}

export default ContactMe