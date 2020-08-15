import React, { useState, useRef, ReactNode, useEffect } from "react";
import { Button } from "../lib/Button";

export const PlacesForm = (props: PlacesForm) => {
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
        <div className="modal">
            <div className="modal__inner">
                <div className="modal__header">
                    <h2 className="modal__title">Добавить карточку</h2>
                    <div className="modal__close" onClick={props.showForm}></div>
                </div>

                <div className="modal__content">
                    <div className="form">
                        <div className="form__content">
                            <div className="form__part">
                                <div className="form__row">
                                    <label className="form__label">
                                        <span className="form__label-title">title</span>
                                        <input className="form__input" type="text" name="title" onChange={handleChange} />
                                    </label>

                                    <label className="form__label">
                                        <span className="form__label-title">country</span>
                                        <input className="form__input" type="text" name="country" onChange={handleChange} />
                                    </label>

                                    <label className="form__label">
                                        <span className="form__label-title">city</span>
                                        <input className="form__input" type="text" name="city" onChange={handleChange} />
                                    </label>
                                </div>
                            </div>

                            <div className="form__part">
                                <div className="form__row">
                                    <label className="form__label">
                                        <span className="form__label-title">description</span>
                                        <textarea className="form__textarea" name="description" onChange={handleChange} />
                                    </label>
                                </div>
                            </div>

                            <div className="form__part">
                                <div className="form__row">
                                    {tags.map((tag, index) => (
                                        <div key={index}>{tag}</div>
                                    ))}
                                    <input type="text" name="tag" ref={tagRef} />
                                    <button onClick={addTag}>добавить тэг</button>
                                </div>
                            </div>
                        </div>

                        <div className="form__footer">
                            <Button onClick={createPlace} type="submit" text="Добавить" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

type PlacesForm = {
    createPlace: any;
    showForm: any;
};
