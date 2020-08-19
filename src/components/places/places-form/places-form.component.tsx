import styles from "./places-form.module.sass";

import React, { useState, useRef, ReactNode, useEffect } from "react";
import { Button } from "../../lib/button/button.component";

interface Props {
    createPlace: any;
    showForm: any;
}

export const PlacesForm = (props: Props) => {
    const [form, setForm] = useState({});
    const tagRef = useRef<HTMLInputElement>(null);
    const [tags, setTags] = useState<string[]>([]);

    const createPlace = async () => {
        props.createPlace(form, tags);
    };

    const handleChange = (event: any) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const addTag = () => {
        if (tagRef.current?.value) {
            const tag = tagRef.current.value;
            setTags((prev) => [...prev, tag]);
            tagRef.current.value = "";
        }
    };

    useEffect(() => {
        console.log(tags);
    }, [tags]);

    return (
        <div className={styles.modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__header}>
                    <h2 className={styles.modal__title}>Добавить карточку</h2>
                    <div className={styles.modal__close} onClick={props.showForm}></div>
                </div>

                <div className={styles.modal__content}>
                    <div className={styles.form}>
                        <div className={styles.form__content}>
                            <div className={styles.form__part}>
                                <div className={styles.form__row}>
                                    <label className={styles.form__label}>
                                        <span className={styles.form__label_title}>title</span>
                                        <input className={styles.form__input} type="text" name="title" onChange={handleChange} />
                                    </label>
                                </div>
                            </div>

                            <div className={styles.form__part}>
                                <div className={styles.form__row}>
                                    <label className={styles.form__label}>
                                        <span className={styles.form__label_title}>title</span>
                                        <textarea className={styles.form__textarea} name="description" onChange={handleChange} />
                                    </label>
                                </div>
                            </div>

                            <div className={styles.form__part}>
                                <div className={styles.form__row}>
                                    {tags.map((tag, index) => (
                                        <div key={index}>{tag}</div>
                                    ))}
                                    <input type="text" name="tag" ref={tagRef} />
                                    <button onClick={addTag}>добавить тэг</button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.form__footer}>
                            <Button onClick={createPlace} type="submit" text="Добавить" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
