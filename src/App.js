import { useState, useRef } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import TableForm from "./components/TableForm";
import Tables from "./components/Tables";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();
  const recipientEmail = email;
  const subject = "Invoice of This Month";
  const body =
    "Invoice of this Month Sending to you.Please Pay as Soon as Possible";

  const handleEmailSend = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-5 rounded shadow
              border-2 border-blue-500
              hover:bg-transparent hover:text-blue-500
              transition-all duration-300"
                >
                  Print/Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <button
              className="bg-green-500 mx-10 text-white font-bold py-2 px-5 rounded shadow
              border-2 border-green-500
              hover:bg-transparent hover:text-green-500
              transition-all duration-300"
              onClick={handleEmailSend}
            >
              Send Email
            </button>
            <div ref={componentRef} className="p-8">
              <Header />
              <MainDetails name={name} address={address} />
              <ClientDetails
                clientName={clientName}
                clientAddress={clientAddress}
              />
              <Dates
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />
              <Tables
                description={description}
                quantity={quantity}
                amount={amount}
                price={price}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <Notes notes={notes} />
              <Footer
                name={name}
                address={address}
                website={website}
                email={email}
                phone={phone}
                bankName={bankName}
                bankAccount={bankAccount}
              />
            </div>
            <button
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-5 rounded shadow
        border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500
        transition-all duration-300"
              onClick={() => setShowInvoice(false)}
            >
              Edit Info
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Your Full Name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter Your Full Name"
                    autoComplete="off"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address">Enter Your Address</label>
                  <input
                    type="text"
                    name="text"
                    id="address"
                    placeholder="Enter Your Address"
                    autoComplete="off"
                    className="mb-3"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    className="mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter Your Phone</label>
                  <input
                    type="text"
                    name="text"
                    id="phone"
                    placeholder="Enter Your Phone"
                    autoComplete="off"
                    className="mb-3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="website">Enter Your WebSite</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter Your WebSite"
                    autoComplete="off"
                    className="mb-3"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter Your Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter Your Bank Name"
                    autoComplete="off"
                    className="mb-3"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bankAccount">Enter Your Bank Account</label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter Your Bank Account"
                    autoComplete="off"
                    className="mb-3"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-20">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter Client's Name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter Client's Name"
                    autoComplete="off"
                    className="mb-3"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter Client's Address</label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter Client's Address"
                    autoComplete="off"
                    className="mb-3"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Enter Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Enter Invoice Number"
                    autoComplete="off"
                    className="mb-3"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Enter Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Enter Invoice Date"
                    autoComplete="off"
                    className="mb-3"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Enter Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Enter Due Date"
                    autoComplete="off"
                    className="mb-3"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* This is table input */}
              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  amount={amount}
                  setAmount={setAmount}
                  price={price}
                  setPrice={setPrice}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Aditional Notes To CLient"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                className="bg-blue-500 text-white font-bold py-2 px-5 rounded shadow
        border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500
        transition-all duration-300"
                onClick={() => setShowInvoice(true)}
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
