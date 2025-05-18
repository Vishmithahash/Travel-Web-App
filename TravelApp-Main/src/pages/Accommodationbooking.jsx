import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Initial form state
const initialFormState = {
    accommodation: "",
    name: "",
    idNumber: "",
    emailAddress: "",
    contactNo: "",
    packageType: "normal",
    numberOfTravellers: 1,
    specialNeeds: "",
};

// Price mapping for different package types
const packagePrices = {
    normal: 100,
    premium: 250,
    vip: 500,
};

export default function BookingForm() {
    const [formData, setFormData] = useState(initialFormState);
    const [message, setMessage] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [totalPrice, setTotalPrice] = useState(packagePrices.normal);
    const [validationErrors, setValidationErrors] = useState({});
    const [showBookingPopup, setShowBookingPopup] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);
    const navigate = useNavigate();

    // Update total price when package type or number of travelers changes
    useEffect(() => {
        const basePrice = packagePrices[formData.packageType] || packagePrices.normal;
        setTotalPrice(basePrice * formData.numberOfTravellers);
    }, [formData.packageType, formData.numberOfTravellers]);

    // Handle input change for all inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "numberOfTravellers" ? Math.max(1, Number(value)) : value,
        }));
        if (validationErrors[name]) {
            setValidationErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    // Validate the current step
    const validateStep = (step) => {
        const errors = {};
        if (step === 1) {
            if (!formData.accommodation.trim()) errors.accommodation = "Accommodation ID is required";
            if (!formData.name.trim()) errors.name = "Name is required";
            if (!formData.idNumber.trim()) errors.idNumber = "ID Number is required";
        } else if (step === 2) {
            if (!formData.emailAddress.trim()) errors.emailAddress = "Email is required";
            else if (!/^\S+@\S+\.\S+$/.test(formData.emailAddress))
                errors.emailAddress = "Invalid email format";
            if (!formData.contactNo.trim()) errors.contactNo = "Contact number is required";
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Navigation between steps
    const handleNextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    // Submit handler to show confirmation popup
    const handleSubmit = () => {
        if (!validateStep(currentStep)) return;

        const finalBooking = {
            ...formData,
            totalPrice,
            bookingDate: new Date().toISOString(),
            bookingId: `BOOK-${Math.floor(Math.random() * 1000000)}`,
        };

        setBookingDetails(finalBooking);
        setShowBookingPopup(true);
        setMessage("Booking successful!");
    };

    // Close popup and reset form
    const handleBookingConfirm = () => {
        setShowBookingPopup(false);
        setFormData(initialFormState);
        setCurrentStep(1);
        setMessage(null);
    };

    // Function to render form fields based on current step
    const renderFormStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Personal Information</h3>
                            <div className="space-y-4">
                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Accommodation ID*
                                    </label>
                                    <input
                                        type="text"
                                        name="accommodation"
                                        value={formData.accommodation}
                                        onChange={handleChange}
                                        placeholder="Accommodation ObjectId"
                                        className={`w-full px-3 py-2 border ${validationErrors.accommodation ? "border-red-500" : "border-gray-300"
                                            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                                    />
                                    {validationErrors.accommodation && (
                                        <p className="text-red-500 text-xs mt-1">{validationErrors.accommodation}</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className={`w-full px-3 py-2 border ${validationErrors.name ? "border-red-500" : "border-gray-300"
                                            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                                    />
                                    {validationErrors.name && (
                                        <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        ID Number*
                                    </label>
                                    <input
                                        type="text"
                                        name="idNumber"
                                        value={formData.idNumber}
                                        onChange={handleChange}
                                        placeholder="National ID or passport number"
                                        className={`w-full px-3 py-2 border ${validationErrors.idNumber ? "border-red-500" : "border-gray-300"
                                            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                                    />
                                    {validationErrors.idNumber && (
                                        <p className="text-red-500 text-xs mt-1">{validationErrors.idNumber}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Contact Details</h3>
                            <div className="space-y-4">
                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address*
                                    </label>
                                    <input
                                        type="email"
                                        name="emailAddress"
                                        value={formData.emailAddress}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className={`w-full px-3 py-2 border ${validationErrors.emailAddress ? "border-red-500" : "border-gray-300"
                                            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                                    />
                                    {validationErrors.emailAddress && (
                                        <p className="text-red-500 text-xs mt-1">{validationErrors.emailAddress}</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Contact Number*
                                    </label>
                                    <input
                                        type="tel"
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 123-4567"
                                        className={`w-full px-3 py-2 border ${validationErrors.contactNo ? "border-red-500" : "border-gray-300"
                                            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                                    />
                                    {validationErrors.contactNo && (
                                        <p className="text-red-500 text-xs mt-1">{validationErrors.contactNo}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Package Selection</h3>
                            <div className="space-y-4">
                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Package Type*
                                    </label>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div
                                            className={`border rounded-md p-3 cursor-pointer transition-all duration-200 ${formData.packageType === "normal"
                                                ? "border-blue-500 bg-blue-50 shadow-sm"
                                                : "border-gray-300 hover:border-blue-300"
                                                }`}
                                            onClick={() =>
                                                handleChange({
                                                    target: { name: "packageType", value: "normal" },
                                                })
                                            }
                                        >
                                            <div className="text-center">
                                                <div className="font-medium">Normal</div>
                                                <div className="text-sm text-gray-500">${packagePrices.normal}/person</div>
                                            </div>
                                        </div>
                                        <div
                                            className={`border rounded-md p-3 cursor-pointer transition-all duration-200 ${formData.packageType === "premium"
                                                ? "border-blue-500 bg-blue-50 shadow-sm"
                                                : "border-gray-300 hover:border-blue-300"
                                                }`}
                                            onClick={() =>
                                                handleChange({
                                                    target: { name: "packageType", value: "premium" },
                                                })
                                            }
                                        >
                                            <div className="text-center">
                                                <div className="font-medium">Premium</div>
                                                <div className="text-sm text-gray-500">${packagePrices.premium}/person</div>
                                            </div>
                                        </div>
                                        <div
                                            className={`border rounded-md p-3 cursor-pointer transition-all duration-200 ${formData.packageType === "vip"
                                                ? "border-blue-500 bg-blue-50 shadow-sm"
                                                : "border-gray-300 hover:border-blue-300"
                                                }`}
                                            onClick={() =>
                                                handleChange({
                                                    target: { name: "packageType", value: "vip" },
                                                })
                                            }
                                        >
                                            <div className="text-center">
                                                <div className="font-medium">VIP</div>
                                                <div className="text-sm text-gray-500">${packagePrices.vip}/person</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Number of Travellers*
                                    </label>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleChange({
                                                    target: {
                                                        name: "numberOfTravellers",
                                                        value: Math.max(1, formData.numberOfTravellers - 1),
                                                    },
                                                })
                                            }
                                            className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300 focus:outline-none"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            name="numberOfTravellers"
                                            value={formData.numberOfTravellers}
                                            onChange={handleChange}
                                            min={1}
                                            className="w-16 text-center py-1 border-t border-b border-gray-300 focus:outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleChange({
                                                    target: {
                                                        name: "numberOfTravellers",
                                                        value: formData.numberOfTravellers + 1,
                                                    },
                                                })
                                            }
                                            className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300 focus:outline-none"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Special Needs
                                    </label>
                                    <textarea
                                        name="specialNeeds"
                                        value={formData.specialNeeds}
                                        onChange={handleChange}
                                        placeholder="Any special requirements or requests"
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    />
                                </div>
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Total Price:</span>
                                        <span className="text-lg font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        {formData.packageType.charAt(0).toUpperCase() +
                                            formData.packageType.slice(1)}{" "}
                                        package × {formData.numberOfTravellers}{" "}
                                        {formData.numberOfTravellers > 1 ? "travellers" : "traveller"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    // Progress indicator component
    const ProgressIndicator = () => {
        return (
            <div className="flex items-center justify-center mb-8">
                {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${currentStep === step
                                ? "bg-blue-600 text-white"
                                : currentStep > step
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            {currentStep > step ? "✓" : step}
                        </div>
                        {step < 3 && (
                            <div
                                className={`h-1 w-16 transition-all duration-300 ${currentStep > step ? "bg-green-500" : "bg-gray-200"
                                    }`}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        );
    };

    // Booking confirmation popup component
    const BookingPopup = ({ booking, onClose }) => {
        const formatDate = (dateString) => {
            const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
            return new Date(dateString).toLocaleDateString(undefined, options);
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-fade-in">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Booking Confirmed!</h3>
                        <p className="text-gray-500">Your booking has been successfully processed.</p>
                    </div>

                    <div className="border-t border-b border-gray-200 py-4 my-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Booking ID</p>
                                <p className="font-medium">{booking.bookingId}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Date</p>
                                <p className="font-medium">{formatDate(booking.bookingDate)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="font-medium">{booking.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{booking.emailAddress}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Package</p>
                                <p className="font-medium capitalize">{booking.packageType}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Travelers</p>
                                <p className="font-medium">{booking.numberOfTravellers}</p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <p className="font-medium">Total Amount</p>
                                <p className="text-lg font-bold text-blue-600">${booking.totalPrice.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => {
                                onClose(); // Close popup
                                navigate('/'); // Navigate to homepage
                            }}
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
                        >
                            Continue to Homepage
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div 
            className="min-h-screen w-full flex items-center justify-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="max-w-screen-xl w-full mx-auto p-4">
                <div className="mt-4 mb-8">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center text-white hover:text-blue-200 bg-blue-600 bg-opacity-70 px-4 py-2 rounded-md transition-all duration-200"
                    >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back
                    </button>
                </div>
                
                {/* Landscape layout with two columns */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left column - Title and Information */}
                    <div className="md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-700 bg-opacity-90 p-8 rounded-lg shadow-lg text-white">
                        <h2 className="text-3xl font-bold mb-6">Experience the Perfect Getaway</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Why Book With Us?</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 mt-1 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Best price guarantee for all accommodations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 mt-1 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>24/7 customer support during your stay</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 mt-1 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Flexible cancellation options</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 mt-1 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Exclusive deals and special offers</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Package Information</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-blue-800 bg-opacity-50 p-4 rounded-md">
                                        <h4 className="font-medium">Normal Package</h4>
                                        <p className="text-sm text-blue-200">${packagePrices.normal}/person - Basic accommodations with standard amenities</p>
                                    </div>
                                    <div className="bg-blue-800 bg-opacity-50 p-4 rounded-md">
                                        <h4 className="font-medium">Premium Package</h4>
                                        <p className="text-sm text-blue-200">${packagePrices.premium}/person - Enhanced experience with additional services</p>
                                    </div>
                                    <div className="bg-blue-800 bg-opacity-50 p-4 rounded-md">
                                        <h4 className="font-medium">VIP Package</h4>
                                        <p className="text-sm text-blue-200">${packagePrices.vip}/person - Luxury treatment with all-inclusive benefits</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right column - Booking Form */}
                    <div className="md:w-1/2">
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 backdrop-blur-sm bg-opacity-95">
                            <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">Accommodation Booking</h2>
                            <p className="text-center text-gray-500 mb-6">Complete the form to secure your reservation</p>

                            {message && (
                                <div
                                    className={`p-4 mb-6 rounded-md ${message.includes("Error")
                                        ? "bg-red-100 text-red-700 border border-red-200"
                                        : "bg-green-100 text-green-700 border border-green-200"
                                        }`}
                                >
                                    {message}
                                </div>
                            )}

                            <ProgressIndicator />
                            <div className="transition-all duration-300">{renderFormStep()}</div>

                            <div className="flex justify-between mt-8">
                                {currentStep > 1 && (
                                    <button
                                        onClick={handlePrevStep}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        Back
                                    </button>
                                )}
                                {currentStep < 3 ? (
                                    <button
                                        onClick={handleNextStep}
                                        className="ml-auto px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSubmit}
                                        className="ml-auto px-4 py-2 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        Complete Booking
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Confirmation Popup */}
            {showBookingPopup && (
                <BookingPopup
                    booking={{
                        ...bookingDetails,
                        totalPrice,
                        bookingDate: new Date().toISOString(),
                    }}
                    onClose={handleBookingConfirm}
                />
            )}
        </div>
    );
}