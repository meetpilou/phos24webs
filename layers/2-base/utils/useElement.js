export default function (element) {
  if (!element) return null

  // IF REF RETURN REF.VALUE
  // IF NOT RETURN ITSELF
  element = unref(element)

  // IF COMPONENT, RETURN COMPONENT DOM ELEMENT
  // IF NOT, RETURN DOM ELEMENT
  return element.$el ?? element
}
