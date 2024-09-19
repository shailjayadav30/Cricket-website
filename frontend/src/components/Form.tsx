import { useState, useEffect } from "react";

interface FormValues {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  topic: string;
}

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    topic: "",
  });

  const [errors, setErrors] = useState<FormValues>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    topic: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormValues(JSON.parse(savedData));
    }
  }, []);

  const validate = () => {
    let isValid = true;
    const newErrors = { fname: "", lname: "", email: "", phone: "", topic: "" };

    if (!formValues.fname) {
      newErrors.fname = "First name is required";
      isValid = false;
    }
    if (!formValues.lname) {
      newErrors.lname = "Last name is required";
      isValid = false;
    }
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }
    if (!formValues.phone || !/^\d{10}$/.test(formValues.phone)) {
      newErrors.phone = "Valid 10-digit phone number is required";
      isValid = false;
    }
    if (!formValues.topic) {
      newErrors.topic = "Topic is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("formData", JSON.stringify(formValues));
      console.log("Form Data Submitted and Saved to Local Storage: ", formValues);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-xl bg-white p-6 md:p-8 max-w-[90%] md:max-w-2xl mx-auto transition-transform transform duration-300 hover:scale-105 rounded-lg"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fname" className="block text-gray-700 mb-2">
            First Name
          </label>
          <input
            value={formValues.fname}
            onChange={handleChange}
            id="fname"
            type="text"
            placeholder="Joe"
            className="w-full p-3 border rounded-md transition-all duration-300 hover:border-blue-500 hover:shadow-lg focus:outline-none focus:border-blue-500"
          />
          {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
        </div>

        <div>
          <label htmlFor="lname" className="block text-gray-700 mb-2">
            Last Name
          </label>
          <input
            value={formValues.lname}
            onChange={handleChange}
            id="lname"
            type="text"
            placeholder="Doe"
            className="w-full p-3 border rounded-md transition-all duration-300 hover:border-blue-500 hover:shadow-lg focus:outline-none focus:border-blue-500"
          />
          {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address
          </label>
          <input
            value={formValues.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="abc@gmail.com"
            className="w-full p-3 border rounded-md transition-all duration-300 hover:border-blue-500 hover:shadow-lg focus:outline-none focus:border-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            value={formValues.phone}
            onChange={handleChange}
            id="phone"
            type="text"
            placeholder="1234567890"
            className="w-full p-3 border rounded-md transition-all duration-300 hover:border-blue-500 hover:shadow-lg focus:outline-none focus:border-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="topic" className="block text-gray-700 mb-2">
            Topic
          </label>
          <input
            value={formValues.topic}
            onChange={handleChange}
            id="topic"
            type="text"
            placeholder="The reason you contact us"
            className="w-full p-3 border rounded-md transition-all duration-300 hover:border-blue-500 hover:shadow-lg focus:outline-none focus:border-blue-500"
          />
          {errors.topic && <p className="text-red-500 text-sm">{errors.topic}</p>}
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="bg-blue-500 w-full text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
