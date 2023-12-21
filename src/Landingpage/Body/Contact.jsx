import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import img from "../../assets/contact/Colorful Illustrated Contact Us Instagram Post.png"
const Contact = () => {

  const handleContact = e => {
    e.preventDefault()
    e.target.reset()
    toast.success('Thank you for contact us', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

  }

  return (
    <div className="py-10">
      <h1 className="text-center text-4xl font-semibold">Contact us</h1>
      <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10  mx-auto">
        <div className="w-full md:w-[40%]">
          <img className="" src={img} alt="" />
        </div>
        <div className="w-full md:w-[50%]">
          <form onSubmit={handleContact} className="space-y-3 text-slate-300 py-10" action="">
            <div className="flex gap-5 items-center justify-between">
              <input
                className="px-4 py-3 w-full rounded-lg border-[#FFDE59] bg-transparent border-2 outline-none"
                type="text"
                placeholder="Name*"
                required
              />
              <input
                className="px-4 py-3 w-full rounded-lg border-[#FFDE59] bg-transparent border-2 outline-none"
                type="email"
                placeholder="Email*"
                required
              />
            </div>
            <div className="flex gap-5 items-center justify-between">
              <input
                className="px-4 py-3 w-full rounded-lg border-[#FFDE59] bg-transparent border-2 outline-none"
                type="number"
                placeholder="Number*"
                required
              />
              <input
                className="px-4 py-3 w-full rounded-lg border-[#FFDE59] bg-transparent border-2 outline-none"
                type="text"
                placeholder="Task*"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              className="px-4 py-3 w-full rounded-lg border-[#FFDE59] bg-transparent border-2 outline-none"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <input
              
              type="submit"
              className="btn bg-[#FFDE59] rounded-md border-none"
            />
          </form>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
