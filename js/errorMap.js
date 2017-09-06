var errorMap = {
  "0": "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.",
  "1": "update(): expected target of %s to be an array; got %s.",
  "2": "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",
  "3": "update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?",
  "4": "Cannot have more than one key in an object with %s",
  "5": "update(): %s expects a spec of type 'object'; got %s",
  "6": "update(): %s expects a target of type 'object'; got %s",
  "7": "Expected %s target to be an array; got %s",
  "8": "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",
  "9": "update(): expected spec of %s to be a function; got %s.",
  "10": "findAllInRenderedTree(...): instance must be a composite component",
  "11": "TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.",
  "12": "ReactShallowRenderer render(): Invalid component element.%s",
  "13": "ReactShallowRenderer render(): Shallow rendering works only with custom components, not primitives (%s). Instead of calling `.render(el)` and inspecting the rendered output, look at `el.props` directly instead.",
  "14": "TestUtils.Simulate expects a component instance and not a ReactElement.TestUtils.Simulate will not work if you are using shallow rendering.",
  "15": "reactComponentExpect(...): instance must be a composite component",
  "16": "Do not override existing functions.",
  "17": "All native instances should have a tag.",
  "18": "Expected a component class, got %s.%s",
  "19": "Expect a native root tag, instead got %s",
  "20": "RawText \"%s\" must be wrapped in an explicit <Text> component.",
  "21": "findNodeHandle(...): Argument is not a component (type: %s, keys: %s)",
  "22": "findNodeHandle(...): Unable to find node handle for unmounted component.",
  "23": "onlyChild must be passed a children with exactly one child.",
  "24": "Mismatched list of contexts in callback queue",
  "25": "Trying to release an instance into a pool of a different type.",
  "26": "Unexpected node: %s",
  "27": "Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.",
  "28": "Transaction.closeAll(): Cannot close transaction when none are open.",
  "29": "accumulate(...): Accumulated items must be not be null or undefined.",
  "30": "accumulateInto(...): Accumulated items must not be null or undefined.",
  "31": "Objects are not valid as a React child (found: %s).%s",
  "32": "Unable to find element with ID %s.",
  "33": "getNodeFromInstance: Invalid argument.",
  "34": "React DOM tree root should always have a node reference.",
  "35": "isAncestor: Invalid argument.",
  "36": "getParentInstance: Invalid argument.",
  "37": "_registerComponent(...): Target container is not a DOM element.",
  "38": "parentComponent must be a valid React Component",
  "39": "ReactDOM.render(): Invalid component element.%s",
  "40": "unmountComponentAtNode(...): Target container is not a DOM element.",
  "41": "mountComponentIntoNode(...): Target container is not valid.",
  "42": "You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s",
  "43": "You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.",
  "44": "findDOMNode was called on an unmounted component.",
  "45": "Element appears to be neither ReactComponent nor DOMNode (keys: %s)",
  "46": "renderToString(): You must pass a valid ReactElement.",
  "47": "renderToStaticMarkup(): You must pass a valid ReactElement.",
  "48": "injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",
  "49": "DOMProperty: Properties that have side effects must use property: %s",
  "50": "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",
  "51": "dangerouslyRenderMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString for server rendering.",
  "52": "dangerouslyRenderMarkup(...): Missing markup.",
  "53": "Danger: Assigning to an already-occupied result index.",
  "54": "Danger: Did not assign to every index of resultList.",
  "55": "Danger: Expected markup to render %s nodes, but rendered %s.",
  "56": "dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.",
  "57": "dangerouslyReplaceNodeWithMarkup(...): Missing markup.",
  "58": "dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().",
  "59": "%s is a void element tag and must not have `children` or use `props.dangerouslySetInnerHTML`.%s",
  "60": "Can only set one of `children` or `props.dangerouslySetInnerHTML`.",
  "61": "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.",
  "62": "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s",
  "63": "Must be mounted to trap events",
  "64": "trapBubbledEvent(...): Requires node to be rendered.",
  "65": "Invalid tag: %s",
  "66": "<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",
  "67": "Missing closing comment for text component %s",
  "68": "Expected devtool events to fire for the child before its parent includes it in onSetChildren().",
  "69": "Expected onSetDisplayName() to fire for the child before its parent includes it in onSetChildren().",
  "70": "Expected onSetChildren() or onSetText() to fire for the child before its parent includes it in onSetChildren().",
  "71": "Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().",
  "72": "Expected onSetParent() and onSetChildren() to be consistent (%s has parents %s and %s).",
  "73": "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
  "74": "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
  "75": "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object.",
  "76": "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.",
  "77": "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
  "78": "ReactClass: You are attempting to define a reserved property, `%s`, that shouldn't be on the \"statics\" key. Define it as an instance property instead; it will still be accessible on the constructor.",
  "79": "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
  "80": "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.",
  "81": "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
  "82": "%s.getInitialState(): must return an object or null",
  "83": "createClass(...): Class specification must implement a `render` method.",
  "84": "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
  "85": "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
  "86": "SimpleEventPlugin: Unhandled event type, `%s`.",
  "87": "Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.",
  "88": "Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.",
  "89": "Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink",
  "90": "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.",
  "91": "`dangerouslySetInnerHTML` does not make sense on <textarea>.",
  "92": "If you supply `defaultValue` on a <textarea>, do not pass children.",
  "93": "<textarea> can only have at most one child.",
  "94": "Expected %s listener to be a function, instead got type %s",
  "95": "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.",
  "96": "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",
  "97": "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",
  "98": "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",
  "99": "EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",
  "100": "EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",
  "101": "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.",
  "102": "EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",
  "103": "executeDirectDispatch(...): Invalid `event`.",
  "104": "ReactCompositeComponent: injectEnvironment() can only be called once.",
  "105": "%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",
  "106": "%s.state: must be set to an object or null",
  "107": "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
  "108": "%s.getChildContext(): key \"%s\" is not defined in childContextTypes.",
  "109": "%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",
  "110": "Stateless function components cannot have refs.",
  "111": "There is no registered component for the tag %s",
  "112": "getNextDescendantID(%s, %s): Received an invalid React DOM ID.",
  "113": "getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.",
  "114": "getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s",
  "115": "traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.",
  "116": "traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.",
  "117": "traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s",
  "118": "updateTextContent called on non-empty component.",
  "119": "addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).",
  "120": "removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).",
  "121": "performUpdateIfNecessary: Unexpected batch number (current %s, pending %s)",
  "122": "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
  "123": "ReactUpdates: must inject a reconcile transaction class and batching strategy",
  "124": "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",
  "125": "ReactUpdates.asap: Can't enqueue an asap callback in a context where updates are not being batched.",
  "126": "ReactUpdates: must provide a reconcile transaction class",
  "127": "ReactUpdates: must provide a batching strategy",
  "128": "ReactUpdates: must provide a batchedUpdates() function",
  "129": "ReactUpdates: must provide an isBatchingUpdates boolean attribute",
  "130": "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
  "131": "Encountered invalid React node of type %s",
  "132": "Ended a touch event which was not counted in trackedTouchCount.",
  "133": "Touch object is missing identifier",
  "134": "Touch data should have been recorded on start",
  "135": "Cannot find single active touch",
  "136": "Attempted to update component `%s` that has already been unmounted (or failed to mount).",
  "137": "%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s",
  "138": "Touch object is missing identifier.",
  "139": "ReactTestRenderer: .update() can't be called after unmount.",
  "140": "Expected hook events to fire for the child before its parent includes it in onSetChildren().",
  "141": "Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().",
  "142": "Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).",
  "143": "React.Children.only expected to receive a single React element child.",
  "144": "Item must have been set",
  "145": "hostContainerInfo should be populated before getPublicInstance is called.",
  "146": "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.",
  "147": "Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.",
  "148": "Expected ref to be a function or a string.",
  "149": "Element ref was specified as a string (%s) but no owner was set. You may have multiple copies of React loaded. (details: https://fb.me/react-refs-must-have-owner).",
  "150": "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.",
  "151": "An iterable object provided no iterator.",
  "152": "%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.",
  "153": "Resuming work not yet implemented.",
  "154": "We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.",
  "155": "An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.",
  "156": "Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.",
  "157": "Invalid type of work. This error is likely caused by a bug in React. Please file an issue.",
  "158": "There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.",
  "159": "There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.",
  "160": "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
  "161": "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.",
  "162": "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.",
  "163": "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
  "164": "A coroutine cannot have host component children.",
  "165": "Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.",
  "166": "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
  "167": "An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.",
  "168": "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.",
  "169": "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.",
  "170": "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.",
  "171": "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.",
  "172": "The custom dialog was already injected.",
  "173": "Injected showDialog() must be a function.",
  "174": "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.",
  "175": "Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.",
  "176": "Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.",
  "177": "Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.",
  "178": "Should have next effect. This error is likely caused by a bug in React. Please file an issue.",
  "179": "Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.",
  "180": "Commit phase errors should be scheduled to recover with task priority. This error is likely caused by a bug in React. Please file an issue.",
  "181": "Switch statement should be exhuastive. This error is likely caused by a bug in React. Please file an issue.",
  "182": "performWork was called recursively. This error is likely caused by a bug in React. Please file an issue.",
  "183": "Should have found an error boundary. This error is likely caused by a bug in React. Please file an issue.",
  "184": "No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.",
  "185": "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
  "186": "Task updates can only be scheduled as a nested update or inside batchedUpdates.",
  "187": "flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.",
  "188": "Unable to find node on an unmounted component.",
  "189": "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.",
  "190": "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
  "191": "Invalid argument passed as callback. Expected a function. Instead received: %s",
  "192": "React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers.",
  "193": "The server renderer does not implement support for array children yet.",
  "194": "Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.",
  "195": "The internal instance must be a React host component. This error is likely caused by a bug in React. Please file an issue.",
  "196": "Missing injection for fiber getContextForSubtree",
  "197": "Injected invokeGuardedCallback() must be a function.",
  "198": "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.",
  "199": "Fiber owners should not show up in Stack stack traces.",
  "200": "Target container is not a DOM element.",
  "201": "ReactDOM.render(): Invalid component element. Instead of passing a string like 'div', pass React.createElement('div') or <div />.",
  "202": "ReactDOM.render(): Invalid component element. Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.",
  "203": "ReactDOM.render(): Invalid component element. This may be caused by unintentionally loading two independent copies of React.",
  "204": "ReactDOM.render(): Invalid component element.",
  "205": "renderToStream(): Invalid component element.",
  "206": "renderToStaticStream(): Invalid component element.",
  "207": "ReactDOMServer.renderToStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.",
  "208": "ReactDOMServer.renderToStaticStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.",
  "209": "renderToString(): Invalid component element.",
  "210": "renderToStaticMarkup(): Invalid component element.",
  "211": "Missing injection for fiber findDOMNode",
  "212": "Missing injection for stack findDOMNode",
  "213": "Element appears to be neither ReactComponent nor DOMNode. Keys: %s",
  "214": "toTree() does not yet know how to handle nodes with tag=%s",
  "215": "something went wrong",
  "216": "Text children should already be flattened.",
  "217": "ReactART does not support the type \"%s\"",
  "218": "ReactART: Can not insert node before itself",
  "219": "getInspectorDataForViewTag() is not available in production",
  "220": "Container does not support insertBefore operation",
  "221": "Tried to register two views with the same name %s",
  "222": "View config not found for name %s",
  "223": "Trying to release an event instance  into a pool of a different type.",
  "224": "Can't read from currently-mounting component. This error is likely caused by a bug in React. Please file an issue.",
  "225": "Unexpected object passed to ReactTestInstance constructor (tag: %s). This is probably a bug in React.",
  "226": "Unsupported component type %s in test renderer. This is probably a bug in React.",
  "227": "ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.",
  "228": "TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.",
  "229": "TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.",
  "230": "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.unstable_createPortal).",
  "231": "Expected `%s` listener to be a function, instead got a value of `%s` type."
};
