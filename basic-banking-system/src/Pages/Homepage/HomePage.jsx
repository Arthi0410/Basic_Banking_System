import React from 'react'
import Navbar from '../../Components/Navbar/navbar.component'
import Footer from '../../Components/Footer/footer.component'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='main'>
            <div><Navbar /></div>
            <div className='mainpg'>
                <div className='mainpgl'>
                    <h1 className='text-5xl decoration-violet-500'>Sparks Bank</h1>
                    <br />
                    <p className='text-lg'>Sparks bank is a financial institution that plays a central role in the economy by providing a range of financial services to individuals, businesses, and governments. We serve as intermediaries between depositors who entrust their money to the bank and borrowers who seek loans for various purposes.</p>
                    <br />
                    <h3 className='text-3xl'>Our services</h3>
                    <h5 className='text-lg'>. Deposit accounts</h5>
                    <h5 className='text-lg'>. Loans and Credit</h5>
                    <h5 className='text-lg'>. Investment Services</h5>
                </div>
                <div className='mainpgr'>
                    <img src='https://img.freepik.com/free-vector/landing-page-credit-card-payment-concept_23-2148298986.jpg?1&w=740&t=st=1694785221~exp=1694785821~hmac=d55cfb31976e394c9a72b1722ece20541ffa5c9670fe800125eede4cdb8970e0' alt='Bank img' className='image' />
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default HomePage