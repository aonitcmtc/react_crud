import { FC } from "react";
import { HeroesList } from "../components/HeroseList";
import { useTitle } from "../hooks/useTitle";

export const Heroes: FC = () => {
    useTitle(`Heroes 👨🏾‍🚀`)
    return <HeroesList />
}