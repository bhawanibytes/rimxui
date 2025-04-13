type Breadcrumb = {
               label: string;
               href?: string;
};

type BreadcrumbsProps = {
               items: Breadcrumb[];
};

export const BreadcrumbsGhost = ({ items }: BreadcrumbsProps) => {
               return (
                              <nav className="text-sm text-gray-500">
                                             <ol className="flex items-center space-x-1">
                                                            {items.map((item, index) => (
                                                                           <li key={index} className="flex items-center">
                                                                                          {item.href ? (
                                                                                                         <a href={item.href} className="hover:text-gray-900 transition">
                                                                                                                        {item.label}
                                                                                                         </a>
                                                                                          ) : (
                                                                                                         <span className="text-gray-800 font-semibold">{item.label}</span>
                                                                                          )}
                                                                                          {index < items.length - 1 && <span className="mx-1">/</span>}
                                                                           </li>
                                                            ))}
                                             </ol>
                              </nav>
               );
};
