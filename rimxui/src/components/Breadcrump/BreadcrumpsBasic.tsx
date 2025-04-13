type Breadcrumb = {
               label: string;
               href?: string;
};

type BreadcrumbsProps = {
               items: Breadcrumb[];
};

export const BreadcrumbsBasic = ({ items }: BreadcrumbsProps) => {
               return (
                              <nav className="text-sm text-gray-700">
                                             <ol className="flex items-center space-x-2">
                                                            {items.map((item, index) => (
                                                                           <li key={index} className="flex items-center">
                                                                                          {item.href ? (
                                                                                                         <a href={item.href} className="hover:underline">
                                                                                                                        {item.label}
                                                                                                         </a>
                                                                                          ) : (
                                                                                                         <span className="font-semibold">{item.label}</span>
                                                                                          )}
                                                                                          {index < items.length - 1 && <span className="mx-2">/</span>}
                                                                           </li>
                                                            ))}
                                             </ol>
                              </nav>
               );
};
