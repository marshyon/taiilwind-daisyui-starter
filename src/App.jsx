import { useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const modalToggleRef = useRef(null);
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    console.log('modal')
    setModal(!modal)
    console.log(modal)
    modalToggleRef.current.click();

  }

  return (
    <div className="bg-slate-50">

      {/* tailwind max width container */}
      <div className="container max-w-5xl mx-auto px-4">

        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <button onClick={() => toggleModal()} className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
        </div>
      </div>


      <h1 className="text-5xl font-bold text-center p-10">
        daisyui
      </h1>



      { /* STEPS */}
      <div className="flex justify-center p-10 ">
        <div className='p-10  hidden md:block'>
          <ul className="steps">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
      </div>

      {/* STEPS MOBILE */}
      <div className="flex justify-center ">
        <div className='p-10 md:hidden'>
          <ul className="steps steps-vertical ">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
      </div>

      {/* BUTTONS */}


      <div className="flex justify-center p-10 border border-green-300 border-0">
        <button className="btn">Button</button>
      </div>

      <div className="flex justify-center p-10 border border-green-300 border-0">

        <button className="btn btn-info">Info</button>
        <button className="ml-1 btn btn-success">Success</button>
        <button className="ml-1 btn btn-warning">Warning</button>
        <button className="ml-1 btn btn-error">Error</button>
      </div>

      <div className="flex justify-center p-10 border border-green-300 border-0">
        <button className="btn btn-circle border mr-5 border-blue-300 border-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <button className="btn btn-circle btn-outline border-blue-300 border-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>


      <div className="flex justify-center p-10">

        <button className="btn loading">loading</button>

      </div>


      {/* DIVIDER */}
      <div className="flex justify-center p-10">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
          <div className="divider">OR</div>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        </div>
      </div>



      {/* AVATAR */}
      <div className="flex justify-center p-10">
        <div className="avatar ">
          <div className="w-24 rounded-full rounded">
            <img src="https://i.pravatar.cc/300" />
          </div>
        </div>
      </div>

      {/* FILE INPUT */}

      <div className="flex justify-center p-5">
        <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
      </div>

      {/* TEXTAREA */}
      <div className="flex justify-center p-5">
        <textarea className="textarea" placeholder="Bio"></textarea>
      </div>



      {/* TEXT INPUT */}
      <div className="flex justify-center p-10">
        <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
      </div>

      {/* CHECKBOX */}

      <div className="flex justify-center pt-10">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text pr-2">Remember me</span>
            <input type="checkbox" checked className="checkbox checkbox-accent" />
          </label>
        </div>
      </div>

      <div className="flex justify-center  pb-5">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text pr-2">Remember me</span>
            <input type="checkbox" className="checkbox checkbox-accent" />
          </label>
        </div>
      </div>

      { /* TOGGLE */}

      <div className="flex justify-center pt-10">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text pr-2">Remember me</span>
            <input type="checkbox" className="toggle" checked />
          </label>
        </div>
      </div>

      <div className="flex justify-center pb-10">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text pr-2">Remember me</span>
            <input type="checkbox" className="toggle" />
          </label>
        </div>
      </div>

      {/* CAROUSEL */}

      <div className="w-[40rem] mx-auto px-4 hidden md:block">

        <div className="flex justify-center p-10">

          <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">
              <img src="https://picsum.photos/seed/aaa/300/150" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://picsum.photos/seed/bbb/300/150" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://picsum.photos/seed/ccc/300/150" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://picsum.photos/seed/ddd/300/150" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      { /* CARD */}

      <div className="flex justify-center p-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://picsum.photos/seed/fff/500" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>


      { /* CHAT */}


      <div className="border-red-600 border-0 p-20 container max-w-3xl mx-auto">



        <div className="chat chat-start border-red-300 border-0">
          <div className="chat-image avatar">
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">Knock Knock!</div>
          <div className="chat-footer opacity-50">
            Delivered
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">Who's there ?!</div>
          <div className="chat-footer opacity-50">
            Seen at 12:46
          </div>
        </div>

      </div>
      { /* ALERT */}

      {/* tailwind max width container */}
      <div className="container max-w-3xl mx-auto px-4">

        <div className="flex justify-center p-10">
          <div className="alert shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>we use cookies for no reason.</span>
            </div>
            <div className="flex-none">
              <button className="btn btn-sm btn-ghost">Deny</button>
              <button className="btn btn-sm btn-primary">Accept</button>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER */}

      <div className="container pt-10 max-w-5xl mx-auto px-4 pb-20">

        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>



      { /* MODAL */}

      {/* The button to open modal */}
      {/* <label htmlFor="my-modal-5" className="btn">open modal</label> */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" ref={modalToggleRef} />


      <input type="checkbox" id="my-modal-5" className="modal-toggle" ref={modalToggleRef} />

      {/* <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label onClick={() => toggleModal()} htmlFor="my-modal-5" className="btn">Yay!</label>
          </div>
        </div> */}


      <div className="modal">


        <div className="modal-box w-11/12 max-w-5xl" style={{ height: '80vh', overflowY: 'auto' }}>

          {/* <div className="modal-box w-11/12 max-w-5xl rounded-lg rounded-r-lg" style={{ height: '80vh', overflowY: 'auto' }}> */}



          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          <p>More text goes here...</p>
          {/* Add as many paragraphs as needed */}
          <div className="modal-action">
            <label onClick={() => toggleModal()} htmlFor="my-modal-5" className="btn">Yay!</label>
          </div>
        </div>
      </div>












      {/* </div> */}







    </div >
  )
}

export default App
