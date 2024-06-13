"use client"

import { Key } from "react";
import SlideShow from "../sections/SlideShow";


export default function SpreadComponents({ components }: { components: any }) {
    return (
        <>
            {components && components.map((component:
                {
                    _key: Key | null | undefined;
                    _type: string | number;
                    slider_items: any;
                    positions: string;
                }, index: number) => (
                // console.log(component._type)
                <div key={`${component._key} + ${index}`} className="asdada">
                    {
                        {
                            "slider": (
                                <SlideShow key={component._key} slider_items={component.slider_items} positions={component.positions} />
                            ),
                        }[component._type]
                    }
                </div>
            ))}
        </>
    )
}