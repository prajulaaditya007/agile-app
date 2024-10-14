type Props = {
    name: string;
    buttonComponent?: any;
    isSmallText?: boolean;
};
const Index = ({ name, buttonComponent, isSmallText = false }: Props) => {
    return (
        <div className={`mb-5 flex w0full items-center justify-between`}>
            <h1 className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}>{name}</h1>
            {buttonComponent}
        </div>
    );
};
export default Index;
