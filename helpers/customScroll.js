/**
 * @param {Element} $elem
 * @param {Number} index
 */
import { getCoords } from './utils.js';

export function customScroll ($elem, index) {
  if (!$elem) { return; }

  const uniqClass = 'scroll-' + (index + 1);
  const $tab = $elem.closest('.tab-fade');
  const $parent = $elem.closest('.compare-table-head-scroll');
  const $tableWrapper = $tab.querySelector('.compare-table');
  let change = 0;

  if (!$tab) { return; }

  if ($tableWrapper.scrollWidth > $tableWrapper.clientWidth) {
    change = $tableWrapper.clientWidth / $tableWrapper.scrollWidth;
  }

  checkScrollSize($elem, change);

  window.addEventListener('resize', () => {
    if ($tableWrapper.scrollWidth > $tableWrapper.clientWidth) {
      change = $tableWrapper.clientWidth / $tableWrapper.scrollWidth;
    } else {
      change = 0;
    }

    checkScrollSize($elem, change);
    // при ресайзе не обновляется позиция скролла
    checkScrollLimit($elem, $parent);
  });

  $elem.classList.add(uniqClass);

  function processScroll (event) {
    event.preventDefault();

    const shift = event.clientX - $elem.getBoundingClientRect().left;
    let currentLeft = parseInt($elem.style.left);
    let newLeft = currentLeft;
    const table = $tableWrapper;
    const maxX = $parent.clientWidth - $elem.clientWidth;
    const scrollableTablePartWidth = table.scrollWidth - $tableWrapper.clientWidth;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove (event) {
      newLeft = event.clientX - shift - $parent.getBoundingClientRect().left;

      // курсор вышел из слайдера => оставить бегунок в его границах.

      if (newLeft < 0) {
        newLeft = 0;
      }
      if (newLeft > maxX) {
        newLeft = maxX;
      }

      currentLeft = newLeft;
      $elem.style.left = newLeft + 'px';

      table.scrollLeft = Math.round(scrollableTablePartWidth * (newLeft / maxX));
    }

    function onMouseUp () {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  function processReversedScroll (event) {
    event.preventDefault();

    let currentLeft = parseInt($elem.style.left);
    let newLeft = currentLeft;
    const table = $tableWrapper;
    const maxX = $parent.clientWidth - $elem.clientWidth;
    const scrollableTablePartWidth = table.scrollWidth - $tableWrapper.clientWidth;

    const shift = event.clientX - $elem.getBoundingClientRect().left;
    const point = event.clientX;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove (event) {
      newLeft = 2 * point - event.clientX - shift - $parent.getBoundingClientRect().left;

      // курсор вышел из слайдера => оставить бегунок в его границах.
      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newLeft > maxX) {
        newLeft = maxX;
      }

      currentLeft = newLeft;
      $elem.style.left = newLeft + 'px';

      table.scrollLeft = Math.round(scrollableTablePartWidth * (newLeft / maxX));
    }

    function onMouseUp () {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  // drag and drop кастомного скролла
  const tdNotCompareTitle = document.querySelectorAll('tr.compare-property td:not(.compare-title)');

  if (tdNotCompareTitle.length > 0) {
    tdNotCompareTitle.forEach((td) => {
      td.addEventListener('mousedown', processReversedScroll);
    });
  }

  $elem.addEventListener('mousedown', processScroll);

  $elem.addEventListener('dragstart', function () {
    return false;
  });

  tableScrollEventHandler($tableWrapper, $elem, $parent);
}

// обработчик скролла таблицы кастомным скроллом
function tableScrollEventHandler ($table, $scroll, $scrollWrapper) {
  if (!$table) { return false; }

  $table.addEventListener('scroll', () => {
    const scrollValue = $table.scrollLeft;
    const tableOuterWidth = $table.clientWidth;
    const tableScrollWidth = $table.scrollWidth;
    const scrollNewPosition = Math.round((scrollValue * ($scrollWrapper.clientWidth - $scroll.clientWidth)) / (tableScrollWidth - tableOuterWidth));

    $scroll.style.left = scrollNewPosition + 'px';

    checkScrollLimit($scroll, $scrollWrapper);
  });
}

// при ресайзе не обновляется позиция скролла
function checkScrollLimit ($elem, $parent) {
  const currentElemRightCoord = getCoords($elem).left + $elem.clientWidth;
  const currentElemRightEdge = getCoords($parent).left + $parent.clientWidth;

  if (currentElemRightCoord > currentElemRightEdge) {
    $elem.style.left = ($parent.clientWidth - $elem.clientWidth) + 'px';
  }
}

// ширина скролла
function checkScrollSize ($elem, change) {
  if (change > 0) {
    const scrollWidth = (100 * change);
    $elem.style.display = '';
    $elem.style.width = scrollWidth + '%';
  } else {
    $elem.style.display = 'none';
  }
}
