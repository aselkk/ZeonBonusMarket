interface Props {
    condition: boolean,
    wrap: (c: JSX.Element ) => JSX.Element,
    children: JSX.Element
}


/**
 * Условный враппер.
 * @example
 * <ConditionalWrap
 *     condition={!!props.linkTo}
 *     wrap={child => <Link to={props.linkTo}>{child}</Link>}
 * >
 *     <button
 *         className={cn(css.button, props.className)}
 *         disabled={props.disabled}
 *     >
 *         {props.children}
 *     </button>
 * </ConditionalWrap>
 * @param condition - условие
 * @param wrap - функция оборочивающая в компонент
 * @param children - исходный компонент
 */
export const ConditionalWrap = ({condition, wrap, children}: Props) => (
    condition ? wrap(children) : children
);