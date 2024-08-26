const text = `Commercial Bank of Ethiopia
Customer Receipt

Company Information

Country: Ethiopia
City: Addis Ababa
Postal Code: 255
SWIFT Code: CBETETAA

Email: info@cbe.com.et
Tel: 251-551-50-04
Fax: 251-551-45-22
Address: Ras Desta Damtew St, 01, Kirkos

Payment Information

Payer: CBE Birr to T24 Transfer Settlement
Account: 1****1000
Receiver: SURAFEL GUDISA URGESA
Account: 1****1057

Payment Date: Sat Aug 24 2024

Reference No: FT24237CLNMY

Reason: e-commerce payment 

Transferred Amount: 800.00 ETB

The Bank you can always rely on.
© 2024 Commercial Bank of Ethiopia. All rights reserved.`;

const accountNumberMatch = text.match(/Account:\s+(\d\*{4}\d{4})/g);

const receiverNameMatch = text.match(/Receiver:\s+([^\n]+)/);
const referenceNoMatch = text.match(/Reference No:\s+(\S+)/);
const reasonMatch = text.match(/Reason:\s+([^\n]*)/);
const transferredAmountMatch = text.match(/Transferred Amount:\s+([\d,]+\.?\d*)\s+ETB/);
const payerMatch = text.match(/Payer:\s+([^\n]+)/);
const paymentDateMatch = text.match(/Payment Date:\s+([^\n]+)/);


const acc = accountNumberMatch?.map(a => {
const singleAcc = a.match(/\d\*{4}\d{4}/);
return singleAcc[0]
})



const accounts = {
from: acc[0], 
to: acc[1]
}





//console.log(`Account Number: ${acc ? acc : 'Not found'}`);

//console.log(`Receiver Name: ${receiverNameMatch ? receiverNameMatch[1] : 'Not found'}`);

//console.log(`Reference No: ${referenceNoMatch ? referenceNoMatch[1] : 'Not found'}`);


//console.log(`Reason: ${reasonMatch ? reasonMatch[1].trim() : 'Not found'}`);





console.log({
payer_name: payerMatch[1],
payer_account_number: `${acc ? acc[0] : 'Not found'}`,
CBE_Receiver_Name: `${receiverNameMatch ? receiverNameMatch[1] : 'Not found'}`,
receiver_account_number: `${acc ? acc[1] : 'Not found'}`,
CBE_Reference_No: `${referenceNoMatch ? referenceNoMatch[1] : 'Not found'}`,
payment_date: `${paymentDateMatch ? paymentDateMatch[1] : 'Not found'}`,
reason: `${reasonMatch ? reasonMatch[1].trim() : 'Not found'}`,
transferred_Amount: transferredAmountMatch[1]
})

































