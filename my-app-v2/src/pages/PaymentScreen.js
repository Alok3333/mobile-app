import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const PaymentScreen = () => {
  const [paymentUrl, setPaymentUrl] = useState(null);

  const initiatePayment = async () => {
    const data = {
      // Your payment details here
      merchant_id: 'YOUR_MERCHANT_ID',
      order_id: 'ORDER_ID',
      amount: 'AMOUNT',
      currency: 'INR',
      redirect_url: 'REDIRECT_URL',
      cancel_url: 'CANCEL_URL',
      // More parameters as required
    };

    // Generate checksum here
    const checksum = await generateChecksum(data); // Implement this function to generate checksum

    const paymentData = {
      ...data,
      checksum,
    };

    const formBody = Object.keys(paymentData)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paymentData[key])}`)
      .join('&');

    const paymentUrl = 'https://secure.ccavenue.com/transaction/initiate';
    setPaymentUrl(paymentUrl + '?' + formBody);
  };

//   const generateChecksum = async (data) => {
//     const key = 'YOUR_WORKING_KEY';
//     const orderId = data.order_id;
  
//     const hash = await fetch('https://your-server.com/generate-checksum', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ ...data, key }),
//     });
  
//     const result = await hash.json();
//     return result.checksum; // Adjust based on your server response
//   };
  

  return (
    <View style={{ flex: 1 }}>
      {paymentUrl ? (
        <WebView
          source={{ uri: paymentUrl }}
          onMessage={(event) => {
            // Handle payment success/failure here
            const { data } = event.nativeEvent;
            if (data === 'success') {
              Alert.alert('Payment Successful');
            } else {
              Alert.alert('Payment Failed');
            }
          }}
        />
      ) : (
        <Button title="Initiate Payment" onPress={initiatePayment} />
      )}
    </View>
  );
};

export default PaymentScreen;

