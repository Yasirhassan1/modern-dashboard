import { memo } from 'react';


import Text from '../../components/Text';
import Card from '../../components/Card';
import PriceCard from '../../components/PriceCard';
import {Button} from "../../components/Button";
import logo from "../../assets/master.webp"
import visaLogo from "../../assets/visa.png"
import { InvoiceCard } from '../../components/InvoiceCard';
import BillingCard from '../../components/BillingCard';
import { TransactionCard } from '../../components/TransactionCard';
const Billing = () => {

    const invoiceData = {
        title: "Invoice", 
        invoices:[
            {
                id: "#MS-415646",
                date: "March, 01, 2020",
                price: "180",
                button: "pdf"

            },

             {
                id: "#MS-415646",
                date: "February, 10, 2021",
                price: "250",
                button: "pdf"

            },  

             {
                id: "#MS-4156df",
                date: "February, 10, 2021",
                price: "250",
                button: "pdf"

            },

             {
                id: "#MS-4FE646",
                date: "February, 10, 2021",
                price: "250",
                button: "pdf"

            },

             {
                id: "#MS-4FEVFE6",
                date: "February, 10, 2021",
                price: "250",
                button: "pdf"

            },

             {
                id: "#MS-4FVF$6",
                date: "February, 10, 2021",
                price: "250",
                button: "pdf"

            },
        ]
    }

    const billingData = [
        {
        title: "Oliver Liam",
        companyName: "Belong Interactive",
        emailAddress: "contact@belonginteractive.com",
        vatNumber: "VAT123456"
    },

    {
        title: "Lucas Harper",
        companyName: "Belong Interactive",
        emailAddress: "contact@belonginteractive.com",
        vatNumber: "VAT123456"
    },
    {
        title: "Ethan James",
        companyName: "Belong Interactive",
        emailAddress: "contact@belonginteractive.com",
        vatNumber: "VAT123456"
    },

        {
        title: "Billing Information",
        companyName: "Belong Interactive",
        emailAddress: "contact@belonginteractive.com",
        vatNumber: "VAT123456"
    },
    ];

    const transactionData = [
        {
            id: 1,
            title: "Netflix",
            timming: "27 March 2020, at 12:30 PM",
            amount: "- $2.99"
        },
        {
            id: 2,
            title: "Apple",
            timming: "27 March 2020, at 04:30 AM",
            amount: "- $122.00"
        },
        {
            id: 3,
            title: "Apple",
            timming: "27 March 2020, at 04:30 AM",
            amount: "- $122.00"
        },
        {
            id: 4,
            title: "Apple",
            timming: "27 March 2020, at 04:30 AM",
            amount: "- $122.00"
        },
            {
            id: 5,
            title: "Apple",
            timming: "27 March 2020, at 04:30 AM",
            amount: "- $122.00"
        }
    ];

  return (
    <div className='flex flex-col gap-4 flex-wrap w-full px-4'>
        <div className="r1 flex justify-between gap-4 flex-wrap">
            <div className="left flex flex-col gap-4">
                <div className="top flex justify-between gap-4 flex-wrap">
                      <Card/>
           <PriceCard title={"Salary"} tag={"Belong Interactive"} price={"2000"} className={"flex-1"}/>
           <PriceCard title={"Paypal"} tag={"Freelance"} price={"455.00"} className={"flex-1"}/>
                </div>
                <div className="paymentCard flex flex-col p-4 shadow rounded-lg gap-4 bg-tertiary flex-1">
                        <div className= "top flex justify-between items-center">
                            <Text as='strong' variant='body-md'>Payment Method</Text>
                            <Button variant="secondaryBtn">Add New Card</Button>
                        </div>
                        <div className="bottom flex gap-3 justify-between mt-auto pb-5">
                        <div className="masterCard rounded-lg flex-1 border justify-center p-5 flex gap-2 items-center border-gray-300">
                            <img width={30} src={logo} alt="kle" />
                                <span className='text-text-secondary'>****</span>
                                <span className='text-text-secondary'> ****</span>
                            <span className='text-text-secondary'> ****</span>
                            <span className='text-text-secondary'> 7852</span>

                        </div>

                         <div className="masterCard flex-1 rounded-lg justify-center border p-5 flex gap-2 items-center border-gray-300">
                            <img width={30} src={visaLogo} alt="kle" />
                            <span className='text-text-secondary'>****</span>
                            <span className='text-text-secondary'> ****</span>
                            <span className='text-text-secondary'> **** </span>
                            <span className='text-text-secondary'> 7852</span>
                        </div>
                        </div>
                </div>

         
           </div>
           <InvoiceCard title={invoiceData.title} invoiceData={invoiceData.invoices}/>
         
        </div>

        <div className="r2 flex justify-between gap-4 flex-wrap">
            <BillingCard title={"Billing Information"} billingData={billingData}/>
            <TransactionCard title={"Your Transaction's"} transactionData={transactionData}/>

        </div>

      
    </div>
  );
};

export default memo(Billing);