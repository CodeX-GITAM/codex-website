import React, {useState} from "react";
import questions from "./FAQ.json"
import Link from "next/link";
import styles from '../styles/faq.module.css'
import FAQcomp from "@/components/FAQcomp";
const FAQ = () => {
    console.log(questions)
    return(
        <div className={styles.faqcontainer}>
            <h1>FAQ'S</h1>
            <p className={styles.tag}>These are some of the frequently asked question on CODEX</p>
            <div className= {styles.faqlayout}>
                {questions.map((item)=>{
                    return(
                        <div key={0} className={styles.viewBox}>
                            <FAQcomp question={item.question} answer={item.answer}/>
                        </div>);
                })}
            </div>
        </div>
    )
}
export default FAQ