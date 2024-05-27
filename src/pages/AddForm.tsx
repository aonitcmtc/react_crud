import { useTitle } from "../hooks/useTitle";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useRoute } from 'wouter';


export const AddForm = () => {
    useTitle(`AddForm 📖`)

    const baseURL = "http://localhost:3000/users"
    const [, setLocation] = useLocation()
    const [, params] = useRoute("/editform/:id");

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        tel: "",
        email: "",
        sex: "male",
        remark: "",
        status: 1
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const updateData = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (params?.id) { 
                const response = await axios.put(baseURL + "/" + params?.id, formData);
                console.log('Data Updated successfully:', response.data);
                setLocation('/'); 
            }else {
                const response = await axios.post(baseURL, formData);
                console.log('Data submitted successfully:', response.data);
                setLocation('/'); 
            }
            
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (params?.id) {
                try {
                    const response = await axios.get(`${baseURL}/${params?.id}`);
                    setFormData(response.data);
                    // console.log(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchData();
    }, [params?.id]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-500 p-4">
            <div className="w-4/6 p-2 mt-2 text-lrft max-w-md">
                <button onClick={() => setLocation('/')} className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">Back</button>
            </div>
            <div className="w-4/6 p-2 mt-2 text-center max-w-md">
                <form className="w-full max-w-lg" onSubmit={updateData}>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                id="grid-first-name" 
                                type="text" 
                                placeholder="Jane"
                                name="firstname"
                                onChange={handleChange}
                                value={formData.firstname}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-last-name" 
                                type="text" 
                                placeholder="Doe"
                                name="lastname"
                                onChange={handleChange}
                                value={formData.lastname}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Telephone
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-password" 
                            type="text" 
                            placeholder="phoneNumber"
                            name="tel"
                            onChange={handleChange}
                            value={formData.tel}
                        />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Email
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-email" 
                            type="email" 
                            placeholder="user@mail.com"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-sex">
                            SEX {formData.sex}
                        </label>
                        <div className="relative">
                            <select 
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-sex"
                                name="sex"
                                onChange={handleChange}
                                value={formData.sex}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Unspecified">Unspecified</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label htmlFor="grid-remark" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">REMARK</label>
                            <textarea 
                                id="grid-remark" 
                                rows={4} 
                                className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300"
                                placeholder="Write your thoughts here..."
                                name="remark"
                                onChange={handleChange}
                                value={formData.remark}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn bg-blue-700 rounded-md p-2 mb-6">Submit</button>
                </form>
                <p className="text-center text-red-800 text-xs">
                    &copy;Copy Right @2024
                </p>
            </div>
        </div>
    )
}