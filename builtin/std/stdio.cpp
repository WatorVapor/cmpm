module;
#include <stdio.h>
#include <stdarg.h>
export module stdio;
/*
export namespace stdio {
*/
export int printf_(const char *format, ...) {
		va_list ap;
		va_start( ap, format );
		printf(format, ap);
		va_end( ap );
	}
/*
};
*/

