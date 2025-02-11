"use client"
import React, { useState } from 'react'

const PaymentOptions = () => {

    const [selectedPayment, setSelectedPayment] = useState("connect-ips");

  return (
    <div className="flex gap-1 md:gap-3 ">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="fonepay"
                    checked={selectedPayment === "fonepay"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="text-[#23a6f0] focus:ring-[#23a6f0]"
                  />
                  <span className="text-[#737373]">Fonepay</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="e-sewa"
                    checked={selectedPayment === "e-sewa"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="text-[#23a6f0] focus:ring-[#23a6f0]"
                  />
                  <span className="text-[#737373]">e-Sewa</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="connect-ips"
                    checked={selectedPayment === "connect-ips"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="text-[#23a6f0] focus:ring-[#23a6f0]"
                  />
                  <span className="text-[#737373]">Connect ips</span>
                </label>
              </div>
  )
}

export default PaymentOptions
