'use server';

import {Rows} from "../lib/data";
import {BlogRow} from "../lib/dto";
import LoadingBlogList from "./LoadingBlogList";
import React, {Suspense} from "react";
import styles from './blogList.module.css';
import Link from "next/link";
import Image from "next/image";
import testImage from "./images/testImage.jpg";

function Item(props: {item: BlogRow}) {
    const {key, title} = props.item;
    // const [isGood, setIsGood] = useState(false);
    // const [showSettings, setShowSettings] = useState(false);
    
    // noinspection JSUnusedLocalSymbols
    // function toggleGoodFlag() {
    //     setIsGood(!isGood);
    // }
    
    // noinspection JSUnusedLocalSymbols
    // function toggleSettings() {
    //     setShowSettings(!showSettings);
    // }
    
    return <div className={styles.gridItemView}>
        <Link href={`/detail/${key}`}>
            <p className={styles.gridItemTitle}>{title}</p>
            <Image src={testImage} alt={'testImage'} className={styles.blogThumbnail}/>
        </Link>
    </div>;
}

export default async function BlogList() {
    const rows: BlogRow[] = await Rows(1);
    
    return <Suspense fallback={<LoadingBlogList/>}>
        <div className={styles.localGrid}>
            {rows.map((item) => <Item key={item.key} item={item}/>)}
        </div>
    </Suspense>
}
