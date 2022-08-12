import { useRef, useEffect } from 'react';
import { today, oneYearAgo, diffDays, formatDate, type CItemType } from './utils';
import Graph from './graph'
import utilStyles from '@/styles/utils.module.css'

function rand() {
  return Math.floor(Math.random() * 50);
}

function getData() {
  const endDate = today();
  const startDate = oneYearAgo();
  const days = diffDays(startDate, endDate);
  const data: CItemType[] = [];
  for (let i = 0; i <= days; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    const date = formatDate(d);
    const count = rand();
    data.push({ date, count });
  }
  return data;
}
const Card = ({ article }: any) => {
  const graphRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const data = getData();
  const options = {
    onClick: (v: Event) => {
      console.log(v);
    }
  };
  useEffect(() => {
		if (tooltipRef.current) {
      tooltipInit()
		}
	})
  
  function tooltipInit() {
    const tip = tooltipRef.current;
    if(!tip){
      return 
    }
    let elems = document.getElementsByClassName('cg-day');
    const mouseOver = function(e: MouseEvent) {
      const elem = e.target as HTMLElement;
      if(!elem){
        return 
      }
      const rect = elem.getBoundingClientRect();
      const count = elem.getAttribute('data-count');
      const date = elem.getAttribute('data-date');
      tip.style.display = 'block';
      tip.textContent = `${count} contributions on ${date}`;
      const w = tip.getBoundingClientRect().width;
      tip.style.left = `${rect.left - (w / 2) + 6}px`;
      tip.style.top = `${rect.top - 35}px`;
    };
    const mouseOut = function(e: MouseEvent) {
      tip.style.display = 'none';
    };
    for (let i = 0; i < elems.length; i++) {
      elems[i].addEventListener('mouseover', mouseOver, false);
      elems[i].addEventListener('mouseout', mouseOut, false);
    }
  }

  return (
    <div className={utilStyles.graphContainer}>
        <div className="graph-main">
          <Graph data={data} options={options}></Graph>
          <div ref={tooltipRef} id="tooltip">Hello world</div>
        </div>
    </div>
  );
};

export default Card;