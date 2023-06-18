import boy from "../images/boy.gif";

const MyCVPage: React.FC = () => {
    return (
        <div className="my-4 flex flex-col ">
            <p className="text-4xl mb-4 p-1">
                <span className="text-5xl"> Dear ICAP Group GmbH,</span>
                <br /> <br />
                if you liked my test task, here is a link to my CV in Google
                drive: <br />
                <br />
                <a
                    className="text-sky-400 underline"
                    href="https://drive.google.com/file/d/1-6enby0KXhpksWLlN009Ep2Pdo9DiVCk/view?export?format=pdf"
                >
                    click here
                </a>
            </p>
            <img src={boy} alt="boy" className="sm:w-1/2 w-2/3 self-center" />
        </div>
    );
};

export default MyCVPage;
