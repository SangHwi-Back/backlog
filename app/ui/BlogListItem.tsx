'use client';

import type { BlogRow } from "../lib/dto";
import Link from "next/link";
import Image from "next/image";
import testImage from "./images/testImage.jpg";
import {useState} from "react";

export default function BlogListItem({item}: {item: BlogRow}) {
    const [isGood, setIsGood] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    function toggleGoodFlag() {
        setIsGood(!isGood);
    }

    function toggleSettings() {
        setShowSettings(!showSettings);
    }

    return <li key={item.key} className={'rounded shadow-inner shadow-white flex w-[300px] h-[140px]'}>
        <div>
            <div className={'flex'}>
                <button className={'mr-5'} onClick={toggleGoodFlag}>Hea{isGood ? "Active" : "inActive"}</button>
                <button onClick={toggleSettings}>Set{showSettings ? "Active" : "inActive"}</button>
            </div>
            <div>
            <Image src={testImage} alt={'testImage'}
                       width={100} height={120}
                       className={'flex-none m-2'}/>
                <Link href={`/detail?id=${item.key}`}>
                    <p className={'flex-initial py-2 pr-2'}>{item.title}</p>
                </Link>
            </div>
        </div>
    </li>;
}
