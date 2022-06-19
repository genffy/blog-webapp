import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import NextImage from "next/image";
import sliderStyles from './slider.module.css';

export const Thumb = ({ selected, onClick, thumbnail }: any) => (
    <div
        className={`${sliderStyles.embla__slide} ${sliderStyles['embla__slide--thumb']} ${selected ? sliderStyles['is-selected'] : ""}`}
    >
        <button
            onClick={onClick}
            className={`${sliderStyles.embla__slide__inner} ${sliderStyles['embla__slide__inner--thumb']}`}
            type="button"
        >
            <div className={sliderStyles.embla__slide__thumbnail}>
                <NextImage
                    layout="fill"
                    // width={thumbnail.width}
                    // height={thumbnail.height}
                    objectFit="contain"
                    src={thumbnail.url}
                    alt={thumbnail.alternativeText || ""}
                />
            </div>
        </button>
    </div>
);

const EmblaCarousel = ({ slides }: any) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true
    });

    const onThumbClick = useCallback(
        (index: number) => {
            if (!embla || !emblaThumbs) return;
            if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
        },
        [embla, emblaThumbs]
    );

    const onSelect = useCallback(() => {
        if (!embla || !emblaThumbs) return;
        setSelectedIndex(embla.selectedScrollSnap());
        emblaThumbs.scrollTo(embla.selectedScrollSnap());
    }, [embla, emblaThumbs, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        embla.on("select", onSelect);
    }, [embla, onSelect]);

    return (
        <>
            <div className={sliderStyles.embla}>
                <div className={sliderStyles.embla__viewport} ref={mainViewportRef}>
                    <div className={sliderStyles.embla__container}>
                        {slides.map((item: any, idx: number) => (
                            <div className={sliderStyles.embla__slide} key={idx}>
                                <div className={sliderStyles.embla__slide__inner}>
                                    <div className={sliderStyles.embla__slide__img}>
                                        <NextImage
                                            layout="fill"
                                            // width={item.width}
                                            // height={item.height}
                                            objectFit="contain"
                                            src={item.url}
                                            alt={item.alternativeText || ""}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${sliderStyles.embla} ${sliderStyles['embla--thumb']}`}>
                <div className={sliderStyles.embla__viewport} ref={thumbViewportRef}>
                    <div className={`${sliderStyles.embla__container} ${sliderStyles['embla__container--thumb']}`}>
                        {slides.map(({ thumbnail }: any, idx: number) => (
                            <Thumb
                                onClick={() => onThumbClick(idx)}
                                selected={idx === selectedIndex}
                                thumbnail={thumbnail}
                                key={idx}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmblaCarousel;
