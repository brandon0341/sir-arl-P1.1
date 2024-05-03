import React from "react";
import { Dumbbell } from "lucide-react";
import Label from "../../components/Label/Label";
import Input from "../../components/Form/Input";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Signup = () => {
    return (
        <>
            <div className="w-full h-full flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <div className="w-full h-auto flex items-center justify-center flex-col">
                    <h6 className="lg:text-lg md:text-lg sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
                        <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
                        Become a Member
                    </h6>
                    <div className="w-[40%] h-auto lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid items-end justify-center bg-black rounded-md lg:gap-5 md:gap-3 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4">
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto ml-20 p-2">
                            <Label>First name</Label>
                            <Input id="first name"
                                name="first name"
                                type="text"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto p-2">
                            <Label>Last name</Label>
                            <Input id="last name"
                                name="last name"
                                type="text"
                                placeholder="Enter your last name"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto ml-20 p-2">
                            <Label>Sex</Label>
                            <Input id="first name"
                                name="first name"
                                type="text"
                                placeholder="Sex"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto p-2">
                            <Label>Birthday</Label>
                            <Input id="last name"
                                name="last name"
                                type="text"
                                placeholder="Birthday"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto ml-20 p-2">
                            <Label>Status</Label>
                            <Input id="last name"
                                name="last name"
                                type="text"
                                placeholder="Status"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto p-2">
                            <Label>Baranggay</Label>
                            <Input id="first name"
                                name="first name"
                                type="text"
                                placeholder="Address"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto ml-20 p-2">
                            <Label>Municipality</Label>
                            <Input id="last name"
                                name="last name"
                                type="text"
                                placeholder="Address"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto p-2">
                            <Label>City</Label>
                            <Input id="first name"
                                name="first name"
                                type="text"
                                placeholder="Address"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto ml-20 p-2">
                            <Label>Province</Label>
                            <Input id="last name"
                                name="last name"
                                type="text"
                                placeholder="Address"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto p-2">
                            <Label>Phone Number</Label>
                            <Input 
                                id="first name"
                                name="first name"
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto ml-20 p-2">
                            <Label>Email</Label>
                            <Input id="last name"
                                name="last name"
                                type="text"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="lg:w-[75%] md:w-[100%] sm:w-[50%] w-full h-auto p-2">
                            <Label>Card Number</Label>
                            <Input id="last name"
                                name="last name"
                                type="text"
                                placeholder="/cccc/ccc/cccc/"
                            />
                        </div>
                        
                        <PrimaryBtn className="w-[15%] h-11 text-lg justify-center font-semibold tracking-wide mb-[-3%] ml-[3%] uppercase absolute">
                            Cancel
                        </PrimaryBtn>
                        <PrimaryBtn className="w-[15%] h-11 text-lg justify-center font-semibold tracking-wide mb-[-3%] ml-[19%] uppercase absolute">
                            Register
                        </PrimaryBtn>
                    </div>
                </div>
            </div>
        </>
        )
}

export default Signup