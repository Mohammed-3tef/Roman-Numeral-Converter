import { useState } from 'react';

const convertToRoman = (num) => {
    const pattern = /^-?\d{1,4}$/;
    var inputString = toString(num);
    if ((num === "" || isNaN(num)) && !pattern.test(inputString)) {
        return <p className='sm:text-[2rem] text-[#F8AEAB]'>Please enter a valid number.</p>;
    }
    let res = "";
    while (num > 0) {
        if (num >= 1000) {num -= 1000; res += 'M';}
        else if (num >= 900) {num -= 900; res += "CM";}
        else if (num >= 500) {num -= 500; res += 'D';}
        else if (num >= 400) {num -= 400; res += "CD";}
        else if (num >= 100) {num -= 100; res += 'C';}
        else if (num >= 90) {num -= 90; res += "XC";}
        else if (num >= 50) {num -= 50; res += 'L';}
        else if (num >= 40) {num -= 40; res += "XL";}
        else if (num >= 10) {num -= 10; res += 'X';}
        else if (num >= 9) {num -= 9; res += "IX";}
        else if (num >= 5) {num -= 5; res += 'V';}
        else if (num >= 4) {num -= 4; res += "IV";}
        else {num--; res += 'I';}
    }
    return res;
}

const Main = () => {
    const [num, setNum] = useState();
    const [result, setResult] = useState("");

    return ( 
        <main className='flex flex-col g-[5rem]'>
            <section className='bg-[#3b3b4f] border-2 border-white p-[1.5rem] flex justify-center flex-col'>
                <form action="" className='flex flex-col'>
                    <label forHTML="numInput" className='pb-[1.5rem] text-[1.5rem] sm:text-[2rem] font-medium'>Enter a Number: </label>
                    <input id="number" type="Number" className='bg-[#0a0a23] w-[100%] sm:w-[75%] mx-auto text-[2.5rem] text-center' min={1} max={3999} requiredvalue={num} onChange={e => setNum(e.target.value)}></input>
                    <div className='pt-[1.5rem]'>
                        <button className="w-[75%] bg-[#F8C22E] py-[0.5rem] text-[1.5rem] sm:text-[2rem] border-2 border-[#B57E27] text-black" id="convert-btn" onClick={(e) => {
                            e.preventDefault();
                            setResult(convertToRoman(num));
                        }}>Convert</button>
                    </div>
                </form>
            </section>
            
            <br /><br />
            
            <section id='output' className="bg-[#3b3b4f] border-2 border-white p-4 flex-wrap">
                {
                num < 0 ? <p className='sm:text-[2rem] text-[#F8AEAB]'>Please enter a number greater than or equal to 1.</p> :
                num > 3999 ? <p className='sm:text-[2rem] text-[#F8AEAB]'>Please enter a number less than or equal to 3999.</p> :
                <p className='text-[3rem]'>{result}</p>
                }
            </section>
        </main>
    );
}
 
export default Main;
