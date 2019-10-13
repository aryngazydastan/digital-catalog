import React, { Component } from "react";

import $ from "jquery";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';



class Fuck extends Component {
  componentDidMount() {
    $(".btn-group, .dropdown").on("mouseleave", function () {
        // make sure it is shown:
        if ($(this).hasClass("show")){
            $(this).children('.dropdown-toggle').first().click();
        }
    });
  }
  render() {
    return (
        <div className="main">
        <div class="btn-group">
            <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                Электронный каталог
            </button>
            <ul class="dropdown-menu">
                <li><f class="dropdown-item clearfix">Медицинский пункт</f></li>
                <li class="dropdown-submenu">
                    <f class="dropdown-item" tabindex="-1" >Общежитие</f>
                    <ul class="dropdown-menu">
                    <li class="dropdown-submenu">
                    <f class="dropdown-item" tabindex="-1" >Интерьер</f>
                    <ul class="dropdown-menu">
                        <li><f class="dropdown-item" tabindex="-1" >Душевая</f></li>
                        <li><f class="dropdown-item" tabindex="-2" >Туалет</f></li>
                        <li><f class="dropdown-item" tabindex="-2" >Комната работника</f></li>
                        <li><f class="dropdown-item" tabindex="-2" >Комната администратора</f></li>
                        <li><f class="dropdown-item" tabindex="-2" >Комната отдыха</f></li>
                        <li><f class="dropdown-item" tabindex="-2" >Комната ИТР</f></li>
                    </ul>
                </li>
                        <li><f class="dropdown-item" tabindex="-2" >Экстерьер</f></li>
                    </ul>
                </li>
                <li><f class="dropdown-item" >Столовая</f></li>
                <li class="dropdown-divider"></li>
                <li><f class="dropdown-item" >Служба поддержки ТОО "Казинпрог"</f></li>
            </ul>
        </div>
        </div>

    );
  }
}

export default Fuck