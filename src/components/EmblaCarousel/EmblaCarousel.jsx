"use client";
import React, {useState, useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {Thumb} from './EmblaCarouselThumbsButton'
import './embla.scss';

export const EmblaCarousel = (props) => {
    const {slides, options} = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',

        dragFree: true,
        axis: 'y',
    })

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )
    const scrollPrev = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollPrev()
    }, [emblaMainApi])

    const scrollNext = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollNext()
    }, [emblaMainApi])

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
        emblaMainApi.on('select', onSelect)
        emblaMainApi.on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaMainRef}>
                <div className="embla__container">
                    {slides.map((url, index) => (
                        <div className="embla__slide" key={index}>
                            <img
                                className="embla__slide__img"
                                src={url}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="next-to">
                <button className="embla__prev" onClick={scrollPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43.294" height="21.656" viewBox="0 0 43.294 21.656">
                        <path d="M21.152-14.433a1.972,1.972,0,0,1-2.783.146L0-30.823-18.371-14.286a1.978,1.978,0,0,1-2.783-.146,1.975,1.975,0,0,1,.149-2.782L-1.429-34.933a1.976,1.976,0,0,1,2.638,0L20.786-17.214a1.824,1.824,0,0,1,.365,2.781Z"
                              transform="translate(21.657 35.438)" fill="#95a3ab"/>
                    </svg>
                </button>

                <div className="embla-thumbs">
                    <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                        <div className="embla-thumbs__container">
                            {slides.map((url, index) => (
                                <Thumb
                                    onClick={() => onThumbClick(index)}
                                    selected={index === selectedIndex}
                                    index={index}
                                    imgSrc={url}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <button className="embla__next" onClick={scrollNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43.314" height="21.656" viewBox="0 0 43.314 21.656">
                        <path d="M21-30.036,1.427-12.317a1.976,1.976,0,0,1-2.638,0L-21.005-30.036a1.976,1.976,0,0,1-.146-2.781,1.975,1.975,0,0,1,2.785-.148L0-16.427,18.371-32.964a1.978,1.978,0,0,1,2.783.146A1.975,1.975,0,0,1,21-30.036Z"
                              transform="translate(21.656 33.468)" fill="#95a3ab"/>
                    </svg>
                </button>

            </div>
        </div>
    )
}
