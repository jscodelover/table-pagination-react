(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{39:function(e,n,t){"use strict";t.r(n);var a=t(13);function r(){var e=Object(a.a)(["\n  padding: 0 4%;\n  .search {\n    margin: 50px 0px;\n    width: 320px;\n    font-size: 16px;\n    border: none;\n    border-bottom: 1px solid #ccc;\n    outline: none;\n  }\n  .table {\n    display: flex;\n    flex-flow: column nowrap;\n    line-height: 1.25;\n    border: 0;\n    &__caption {\n      padding: 1rem;\n      letter-spacing: 3px;\n      caption-side: top;\n      &--text1 {\n        font-size: 1.5rem;\n        font-weight: 900;\n        color: #999;\n      }\n      &--text2 {\n        font-size: 1.2rem;\n        font-weight: 300;\n        color: #a52a2a;\n      }\n    }\n    &__row {\n      display: flex;\n      font-size: 1.1rem;\n      word-wrap: break-word;\n      overflow-wrap: break-word;\n      word-break: break-all;\n      cursor: pointer;\n      &:nth-of-type(even) {\n        background-color: #e5e5e5;\n      }\n      &--column-heading {\n        font-weight: 700;\n        color: #f3f3f3;\n        background-color: #08acbd;\n        text-transform: capitalize;\n        .sort {\n          margin-left: 6px;\n        }\n      }\n      &--content {\n        padding: 5px 10px;\n        display: flex;\n        flex: 1 0;\n        align-items: center;\n        justify-content: center;\n        border: 1px solid #888888;\n        border-collapse: collapse;\n        border-spacing: 0;\n      }\n\n      &--doubleSize {\n        flex-grow: 2;\n      }\n\n      &:hover {\n        background-color: #312f2f;\n        color: white;\n      }\n    }\n  }\n  .btnContainer {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    .btn {\n      padding: 10px 0px;\n      width: 110px;\n      color: #00a0b7;\n      background-color: white;\n      font-size: 16px;\n      border: 1px solid #ccc;\n      border-radius: 20px;\n      cursor: pointer;\n      &:hover {\n        box-shadow: 0px 1px 2px;\n      }\n    }\n  }\n  .pagination {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    margin: 20px auto;\n    font-size: 16px;\n    list-style-type: none;\n    &__item {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 3px 18px;\n      cursor: pointer;\n      background: #f1f1f1;\n      text-align: center;\n      border: 1px solid white;\n    }\n    &__active {\n      background: tomato;\n    }\n  }\n"]);return r=function(){return e},e}var l=t(14).b.div(r());n.default=l},41:function(e,n,t){"use strict";t.r(n);var a=t(63),r=t(64),l=t(72),o=t(65),i=t(73),c=t(0),s=t.n(c),u=t(66),d=t.n(u),p=t(39),m=t(26),b=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(o.a)(n).call(this,e))).doubleSizeCol=function(e){return["company_name","email","web"].some(function(n){return e.includes(n)})},t.handleClick=function(e){t.setState({currentPage:Number(e.target.id)})},t.showDetails=function(e){t.props.detail(e),t.props.history.push("/user/".concat(e.id))},t.paginationRange=function(e){var n=t.state,a=n.pageNumbers,r=n.currentPage;if(r>e-5)return a.slice(e-5,e);var l=r+4,o=l-5;return a.slice(o,l)},t.updateCurrentPage=function(e,n){"add"===e?t.setState(function(e){return{currentPage:e.currentPage===n?n:e.currentPage+1}}):t.setState(function(e){return{currentPage:1===e.currentPage?1:e.currentPage-1}})},t.handleInput=function(e){var n=t.state.data.filter(function(n){return n.first_name.toLowerCase().includes(e.target.value.toLowerCase())});t.setState({searchInput:e.target.value,newData:n})},t.sort=function(e){t.setState(function(n){return{sortBy:n.sortBy===e?"":e}})},t.heading=function(e){return e.map(function(e){var n="table__row--content table__row--column-heading";return s.a.createElement("th",{key:e.label,className:t.doubleSizeCol(e.label)?"".concat(n," table__row--doubleSize"):n},e.value,s.a.createElement("span",{className:"sort",onClick:function(){t.sort(e.label)}},t.state.sortBy===e.label?s.a.createElement("i",{className:"fas fa-caret-up"}):s.a.createElement("i",{className:"fas fa-caret-down"})))})},t.renderRow=function(e){var n=[];for(var a in e)"id"!==a&&n.push(s.a.createElement("td",{key:a,className:t.doubleSizeCol(a)?"".concat("table__row--content"," table__row--doubleSize"):"table__row--content"},e[a]));return n},t.renderPageNumbers=function(e,n){var a=e.map(function(e){return s.a.createElement("li",{key:e,id:e,className:"pagination__item",onClick:t.handleClick},e)});return s.a.createElement(s.a.Fragment,null,e[0]>2?s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{key:"1",id:"1",className:"pagination__item",onClick:t.handleClick},"1"),s.a.createElement("li",null,"...")):null,a,e[0]<n-4?s.a.createElement(s.a.Fragment,null,s.a.createElement("li",null,"..."),s.a.createElement("li",{key:n,id:n,className:"pagination__item",onClick:t.handleClick},n)):null)},t.state={loading:!1,data:[],currentPage:1,recordPerPage:5,pageNumbers:[],searchInput:"",newData:[],sortBy:""},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.state.recordPerPage;this.setState({loading:!0}),d.a.get("http://demo9197058.mockable.io/users").then(function(t){for(var a=t.data,r=[],l=1;l<=Math.ceil(a.length/n);l++)r.push(l);e.setState({data:a,loading:!1,pageNumbers:r})}).catch(function(n){return e.setState({loading:!1})})}},{key:"render",value:function(){var e=this,n=this.state,t=n.loading,a=n.data,r=n.currentPage,l=n.recordPerPage,o=n.searchInput,i=n.newData,c=n.sortBy,u=i.length?i:a,d=r*l,b=d-l,f=u.slice(b,d);f.sort(function(e,n){return e[c]>n[c]?1:-1});var g=Math.ceil(u.length/l);return t?s.a.createElement(m.a,null):s.a.createElement(p.default,null,s.a.createElement("input",{className:"search",placeholder:"Search by First Name",onChange:this.handleInput,value:o}),s.a.createElement("table",{className:"table"},s.a.createElement("caption",{className:"table__caption"},s.a.createElement("span",{className:"table__caption--text1"},"Data Peace"),s.a.createElement("br",null),s.a.createElement("span",{className:"table__caption--text2"},"Front End Task")),s.a.createElement("thead",null,s.a.createElement("tr",{className:"table__row"},this.heading([{label:"first_name",value:"first name"},{label:"last_name",value:"last name"},{label:"company_name",value:"company name"},{label:"city",value:"city"},{label:"state",value:"state"},{label:"zip",value:"zip"},{label:"email",value:"email"},{label:"web",value:"web"},{label:"age",value:"age"}]))),s.a.createElement("tbody",null,f.map(function(n){return s.a.createElement("tr",{className:"table__row",onClick:function(){e.showDetails(n)},key:n.id},e.renderRow(n))}))),s.a.createElement("div",{className:"btnContainer"},s.a.createElement("button",{className:"btn",onClick:function(){e.updateCurrentPage("sub",g)}},"Previous"),s.a.createElement("button",{className:"btn",onClick:function(){e.updateCurrentPage("add",g)}},"Next")),s.a.createElement("ul",{className:"pagination"},this.renderPageNumbers(this.paginationRange(g),g)))}}]),n}(s.a.Component);n.default=b}}]);
//# sourceMappingURL=4.9f41a0d5.chunk.js.map