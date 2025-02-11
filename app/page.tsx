"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Timer from "@/components/Timer"
import CopyButton from "@/components/ui/CopyButton";
import PaymentOptions from "@/components/PaymentOptions"


export default function CheckoutPage() {
 
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
     

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center text-sm text-[#737373] mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Shop</BreadcrumbLink>
              </BreadcrumbItem>

            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Payment Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#252b42] mb-6">Payment</h2>
            <div className="space-y-4">
              <p className="text-[#737373] mb-4">Pay With:</p>
                    <PaymentOptions/>

              <div className="mt-8 text-center">
                <p className="text-[#737373] mb-2">Transfer USD49.80 to:</p>
                <p className="text-lg font-bold text-[#252b42] mb-1">Polaris Bank</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-xl font-mono text-black">0123456781</span>
                  <CopyButton text="0123456781" />
                </div>
                
                <div className="flex gap-3 w-full justify-center">
                <p className="text-[#737373]">
                  Expires in</p> <Timer minutes={10} /> <p className="text-[#737373]">minutes
                </p>
                </div>
              </div>
              <Link href={'/payment'}>
              <  Button className="w-full bg-[#23a6f0] text-white py-4 rounded-md hover:bg-[#252b42] transition-colors mt-8" >
                Confirm Payment
              </  Button>
              </Link>

              <p className="text-xs text-[#737373] mt-4">
                Your personal data will be used to process your order, support your experience throughout this website,
                and for other purposes described in our privacy policy.
              </p>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#252b42] mb-6">Order Summary</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src={`https://s3-alpha-sig.figma.com/img/738b/fd0a/9db595bcdea232302f89c006698b27cc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LuYt8MyHl5Eko1PIkuaQqgk-KQ4O7b1P~RUWbXG3Un7ktWgEfISU919oW0vx9jp2Eb1oonvqzaZzTix8F-wEtO1FsYdUk4ig4DZYTfLr0lzZzhrez0jk6CtFKSd56YTOlbjuJ5qQfY33AtgMpP6nF4Gi8B0KEain7MEzPMjkPy9GQ4IQoFUbOL3KIZLEyyM3faaWf30B18z-tQEfIRlhLWRJZPxrsDnPcju4cJhjEfl0O~lKwAir82GTa6zUjHS0ol0FKVO4qdd3Cd7Hu0yUuXdQ08AzytJ6oL2f4~-6wAk0BIwrLxnWBDnf~LhWaxfwkE1oVxcPBHAecE6udpZsCQ__`}
                  alt="Product"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-[#252b42]">Product name</h3>
                  <p className="text-sm text-[#737373]">Description</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#252b42]">$49.80</p>
                  <p className="text-sm text-[#737373]">Qty: 2</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Gift or discount code"
                    className="flex-1 border rounded-l-md px-1 mx-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#23a6f0]"
                  />
                  <  Button className="bg-[#23a6f0] text-white px-6 py-2 rounded-r-md hover:bg-[#252b42] transition-colors">
                    Apply
                  </  Button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[#737373]">
                    <span>Subtotal</span>
                    <span>$49.80</span>
                  </div>
                  <div className="flex justify-between text-[#737373]">
                    <span>Shipping</span>
                    <span>$7.24</span>
                  </div>
                  <div className="flex justify-between font-medium text-[#252b42] pt-2 border-t">
                    <span>Total</span>
                    <div className="text-right">
                      <span className="text-xl">$59.28</span>
                      <p className="text-xs text-[#737373]">Including $2.24 in taxes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

