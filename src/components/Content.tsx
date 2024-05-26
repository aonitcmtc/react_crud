import { useState, FC} from "react";
import { Link } from "wouter";
// import logo 

export const Content: FC = ({children}) => {
    const [showManu, setShowManu] = useState<boolean>(false);

    return (
        <div className="min-h-full backdrop-blur-xl">
           <h1>Content</h1>
        </div>
    )
}