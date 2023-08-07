
function App() {
  const handlePrint=()=>{
    window.print();
  }
  return (
    <>

    <main className='m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
      {/* header */}
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className='font-bold uppercase tracking-wide text-4xl mb-3'>Invoice</h1>
        </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
            <li><button className='btn btn-print' onClick={handlePrint}>Print</button></li>
            <li><button className='btn btn-download'>Download</button></li>
            <li><button className='btn btn-send'>Send</button></li>
            </ul>
          </div>
      </header>

      {/* Your Detail */}

      <section className='flex flex-col items-end justify-end'>
        <h2 className='text-xl uppercase' >Thomas Shankar</h2>
        <p>Your Address</p>
      </section>

      {/* Client Detail */}

      <section className='mt-5'>
        <h2 className='text-xl uppercase'>Client's Name</h2>
        <p>Client's Address</p>
      </section>

      {/* Date */}

      <article className='my-5 flex items-end justify-end'>
        <ul>
          <li><span className='font-bold'>Invoice Number:</span></li>
          <li><span className='font-bold'>Due Date</span></li>
          <li><span className='font-bold'>Invoice Date</span></li>
        </ul>
      </article>


      {/* Tables */}

      <div className='my-5'>This is the Table</div>
      {/* Notes */}
      <section className='mb-5'>
        <p>Notes to the Client...</p>
      </section>

      {/* Footer */}
      <footer>
        <ul className='flex flex-wrap items-center justify-center'>
          <li><span className='font-bold'>Your Name</span></li>
          <li><span className='font-bold'>Your Email</span></li>
          <li><span className='font-bold'>Phone Number</span></li>
          <li><span className='font-bold'>Bank</span></li>
          <li><span className='font-bold'>Account Holder Name</span></li>
          <li><span className='font-bold'>Account Number</span></li>
          <li><span className='font-bold'>Website</span></li>
          
        </ul>
      </footer>


    </main>
      
    </>
  ); 
}

export default App;
