function Pages({page}) {
    return <div className="flex gap-2 flex-wrap">
    {Array(10).fill(0).map((value, index)=><div><a href={`/page/${index}`} className={`${page == index ? 'btn-page-selected' : 'btn-page-unselected'}`}>{index+1}</a></div>)}
  </div>
}

export default Pages;